
export default (req, res) => {
    res.statusCode = 200
  
    const data = [
   
      
      {
      id : 1,
      name : 'Miroir verrière Art Déco double sens en métal doré Wallis - PM',
      img : '/image/kenwood_chef_kvc30_2.png',
      prix : '5000da'
      },
      {
      id : 2,  
      name : 'XIAOMI Redmi 9A - 6.5" - 2/32 - Bleu -Garantie 12 Mois',
      img : '/image/1.jpg',
      prix : '5000da'
      }

    
    ]
  
    res.json(data)
  }
  