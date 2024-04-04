export async function POST(req, res){

    const { email } = req.body;


    const payload = {
        category: "non_technical",
        email: email,
      };
    

      // Define the API endpoint URL
      const apiUrl = 'https://bluepen.co.in/api/freelancer/getemailotp.php';
    
      try {
        // Make the API call to get the OTP
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
         // Check if the request was successful
    if (!response.ok) {
        throw new Error('Failed to get OTP');
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Send the response data
      res.status(200).json(data);
    } catch (error) {
        // Handle any errors
        console.error('Error getting OTP:', error.message);
        res.status(500).json({ error: 'Failed to get OTP' });
      }
    }