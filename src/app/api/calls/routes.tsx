export async function POST(req, res){

    const { email } = req.body;


    const payload = {
        category: "non_technical",
        email: email,
      };
    

      const apiUrl = process.env.NEXT_PUBLIC_BLUEPEN_OTP_SEND
    
      try {
       
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
         
    if (!response.ok) {
        throw new Error('Failed to get OTP');
      }
  
   
      const data = await response.json();
  
    
      res.status(200).json(data);
    } catch (error) {
       
        console.error('Error getting OTP:', error.message);
        res.status(500).json({ error: 'Failed to get OTP' });
      }
    }









