import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { registrant, response, timestamp, status } = req.body;

    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Create filename with current date
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const filename = `email-logs-${date}.json`;
    const filepath = path.join(logsDir, filename);

    // Read existing logs or create new array
    let logs = [];
    if (fs.existsSync(filepath)) {
      try {
        const existingData = fs.readFileSync(filepath, 'utf8');
        if (existingData.trim()) {
          logs = JSON.parse(existingData);
        }
      } catch (error) {
        console.error('Error reading existing log file:', error);
        // If file is corrupted, try to backup and start fresh
        const backupPath = filepath.replace(
          '.json',
          `-backup-${Date.now()}.json`
        );
        try {
          fs.copyFileSync(filepath, backupPath);
          console.log(`Backed up corrupted file to: ${backupPath}`);
        } catch (backupError) {
          console.error('Failed to backup corrupted file:', backupError);
        }
        logs = [];
      }
    }

    // Add new log entry
    const logEntry = {
      timestamp: timestamp || new Date().toISOString(),
      registrant: {
        id: registrant.id,
        firstName: registrant.firstName,
        lastName: registrant.lastName,
        email: registrant.email,
        company: registrant.company?.name || 'N/A',
      },
      status: status || (response?.message === 'success' ? 'sent' : 'error'),
      response: response,
      error: response?.message !== 'success' ? response?.message : null,
    };

    logs.push(logEntry);

    // Write back to file with atomic operation
    try {
      const jsonData = JSON.stringify(logs, null, 2);
      const tempFile = filepath + '.tmp';

      // Write to temporary file first
      fs.writeFileSync(tempFile, jsonData);

      // Atomic move to final location
      fs.renameSync(tempFile, filepath);

      res.status(200).json({ message: 'Logged successfully' });
    } catch (writeError) {
      console.error('Error writing log file:', writeError);
      res.status(500).json({ message: 'Error writing log file' });
    }
  } catch (error) {
    console.error('Error logging email response:', error);
    res.status(500).json({ message: 'Error logging response' });
  }
}
