module.exports = (io) => {
    // console.log('IO: ', io);
    io.on('connect', socket => {
        console.log('a user connected');
    });
    
    io.on('disconnect', function(){
      console.log('user disconnected');
    });
};