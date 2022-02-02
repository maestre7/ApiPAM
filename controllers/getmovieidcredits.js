
function getmovieidcredits(req, res){
    res.status(200).json({ message: `Members delete id: ${req.params.id}` });
    res.status(401).json({ message: `Members delete id: ${req.params.id}` });
    res.status(404).json({ message: `Members delete id: ${req.params.id}` });
   }

module.exports = getmovieidcredits;