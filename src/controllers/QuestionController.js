module.exports = {
  index(req, res){
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.actions;
    const password = req.body.password; //linha 161 do room.js o name="password"
  
    console.log(`room = ${roomId}, questionId = ${questionId}
    action = ${action}, password = ${password}`)
  }
}