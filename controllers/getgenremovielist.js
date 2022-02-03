
const result = {
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ]
  }

function getgenremovielist(req, res){
    res.status(200).json(result);
    /* res.status(401).json({ message: `Members delete id` });
    res.status(404).json({ message: `Members delete id` }); */
   }

module.exports = getgenremovielist;