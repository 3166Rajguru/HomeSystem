
async function getDevice() {
    const teamId ='dOqGo0w';
    const deviceData = await getDeviceInfo(teamId);
    document.getElementById('result').innerHTML = `Current Fan Speed: ${deviceData.value}`;
  }
  
  async function setFanSpeed() {
    const teamId = document.getElementById('teamId').value;
    const fanSpeed = document.getElementById('fanSpeed').value;
  
    try {
      const response = await fetch(`https://kodessphere-api.vercel.app/devices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teamid: teamId, device: 'fan', value: fanSpeed })
      });
  
      if (!response.ok) {
        throw new Error(`Error setting fan speed! Status: ${response.status}`);
      }
  
      alert('Fan speed set successfully!');
    } catch (error) {
      console.error('Error setting fan speed:', error);
    }
  }
  