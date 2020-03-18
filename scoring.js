//QB// (passing yards)-25points=363/25=(14.52points)  .and (passing touchdowns)-6pnts (6*3=18). 
//(rushing yards)=(10/22=2.2)  (RUSHING TOUCHDOWN)-(6*1 = 6)
// passing & rushing total points = sumAll.equal 40.72

const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return QBScore(player)
    case 'RB':
      return RBScore(player)
    case 'WR':
      return WRScore(player)
    case 'TE':
      return TEScore(player)
    // case 'K':
    //   return kScore(player)
    default:
      return 0
  }
}
const QBScore = (player) => {
  let score = 0
  score += player.stats.passing.yards / 25
  score += player.stats.passing.touchdowns * 6
  score += player.stats.rushing.yards / 10
  score += player.stats.rushing.touchdowns * 6
  return score
}
const RBScore = (player) => {
  let score = 0
  score += player.stats.rushing.yards / 10
  score += player.stats.rushing.touchdowns * 6
  score += player.stats.receiving.receptions * 1
  score += player.stats.receiving.yards / 10
  return score
}
const WRScore = (player) => {
  let score = 0
  score += player.stats.rushing.yards / 10
  score += player.stats.rushing.touchdowns * 6
  score += player.stats.receiving.receptions * 1
  score += player.stats.receiving.touchdowns * 6
  score += player.stats.receiving.yards / 10
  score += player.stats.return.kickreturn.yards / 15
  score += player.stats.return.kickreturn.touchdowns * 6
  score += player.stats.return.kickreturn.fumbles * -3
  score += player.stats.return.puntreturn.yards / 15
  score += player.stats.return.puntreturn.touchdowns * 6
  score += player.stats.return.puntreturn.fumbles * -3
  return score
}
const TEScore = (player) => {
  let score = 0
  score += player.stats.receiving.receptions * 1
  score += player.stats.receiving.yards / 10
  score += player.stats.receiving.touchdowns * 6
  return score
}
module.exports = calculateScore