
module.exports = function (req, res, next) {
  const requester = req.headers['x-requester'];
  if(!requester || requester !== 'ScalablePathTest'){
    res.status(403);
    return res.json({error: 'Invalid request'});
  }
  next();
};