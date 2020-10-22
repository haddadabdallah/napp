// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  

  const id = req.body.id
  
  
 

  const data = [
 
    {
    id : 1,
    name : 'Miroir',
    img : '/image/kenwood_chef_kvc30_2.png',
    prix : '5da'
    },
    {
      id : 2,
      name : 'verrière',
      img : '/image/kenwood_chef_kvc30_2.png',
      prix : '6da'
      }
  
  ] 

    let key =  req.body.id - 1

   

    

  res.statusCode = 200


    res.json(data[key])

 


  
}
