document.getElementById('fetchDetails').addEventListener('click', async () => {
  // Get the entered MemberId
  const memberId = document.getElementById('memberId').value;

  // Validate the input
  if (!memberId) {
    alert('Please enter a Member ID.');
    return;
  }

  // Define the API URL
  const apiUrl = `https://localhost:7130/api/Members/${memberId}`;

  try {
    // Make a GET request to fetch member details
    const response = await fetch(apiUrl);

    // Handle non-200 responses
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the JSON response
    const member = await response.json();

    // Display the member details
    document.getElementById('memberDetails').style.display = 'block';
    document.getElementById('info').innerHTML = `
      <strong>Member ID:</strong> ${member.memberId}<br>
      <strong>Name:</strong> ${member.memberName}<br>
      <strong>Phone Number:</strong> ${member.contactNo}<br>
      <strong>Email:</strong> ${member.email}
    `;
  } catch (error) {
    console.error('Failed to fetch member details:', error);
    document.getElementById('info').textContent = `Error: ${error.message}`;
  }
});
