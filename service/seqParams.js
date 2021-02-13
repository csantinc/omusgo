//Input parameters for seqGenerator
//len: time length
//scale: scale allowed
//grid: minimum time resolution, aka shortest note duration
//format: notes as midi value or standard musical notation
function seqParams(len, scale,grid,format) {
    this.len=len;
    this.scale=scale;
    this.grid=grid;
    this.format=format;
}

module.exports = seqParams;