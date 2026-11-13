const form = document.querySelector('#match-form');
const setupView = document.querySelector('#setup-view');
const gameView = document.querySelector('#game-view');
const resultView = document.querySelector('#result-view');

const ui = {
  pageTitle: document.querySelector('#page-title'),
  homeTeamSelect: document.querySelector('#home-team'),
  awayTeamSelect: document.querySelector('#away-team'),
  homeTeamFlag: document.querySelector('#home-team-flag'),
  awayTeamFlag: document.querySelector('#away-team-flag'),
  homeCrowdFlag: document.querySelector('#home-crowd-flag'),
  awayCrowdFlag: document.querySelector('#away-crowd-flag'),
  setupHeading: document.querySelector('#setup-heading'),
  formatPreview: document.querySelector('#format-preview'),
  pitchTitle: document.querySelector('#pitch-title'),
  matchLabel: document.querySelector('#match-label'),
  liveLabel: document.querySelector('#live-label'),
  formatLabel: document.querySelector('#format-label'),
  inningsLabel: document.querySelector('#innings-label'),
  homeName: document.querySelector('#home-name'),
  awayName: document.querySelector('#away-name'),
  homeCrest: document.querySelector('#home-crest'),
  awayCrest: document.querySelector('#away-crest'),
  homeScore: document.querySelector('#home-score'),
  awayScore: document.querySelector('#away-score'),
  liveScoreTeam: document.querySelector('#live-score-team'),
  liveScore: document.querySelector('#live-score'),
  liveScoreOvers: document.querySelector('#live-score-overs'),
  homeOvers: document.querySelector('#home-overs'),
  awayOvers: document.querySelector('#away-overs'),
  targetLabel: document.querySelector('#target-label'),
  targetValue: document.querySelector('#target-value'),
  runRateLabel: document.querySelector('#run-rate-label'),
  runRateValue: document.querySelector('#run-rate-value'),
  boundaryStat: document.querySelector('#boundary-stat'),
  wicketStat: document.querySelector('#wicket-stat'),
  rateStat: document.querySelector('#rate-stat'),
  deliveryCount: document.querySelector('#delivery-count'),
  recentContent: document.querySelector('#recent-content'),
  commentaryText: document.querySelector('#commentary-text'),
  commentaryOver: document.querySelector('#commentary-over'),
  actionKicker: document.querySelector('#action-kicker'),
  gameHeading: document.querySelector('#game-heading'),
  gameCopy: document.querySelector('#game-copy'),
  battingLabel: document.querySelector('#batting-label'),
  miniBattingCrest: document.querySelector('#mini-batting-crest'),
  battingTeamName: document.querySelector('#batting-team-name'),
  bowlingLine: document.querySelector('#bowling-line'),
  miniScore: document.querySelector('#mini-score'),
  miniOvers: document.querySelector('#mini-overs'),
  autoplayButton: document.querySelector('#autoplay-button'),
  bowlButton: document.querySelector('#bowl-button'),
  overButton: document.querySelector('#over-button'),
  resultHeading: document.querySelector('#result-heading'),
  resultCopy: document.querySelector('#result-copy'),
  newMatchButton: document.querySelector('#new-match-button'),
  rematchButton: document.querySelector('#rematch-button'),
  scorecardFormat: document.querySelector('#scorecard-format'),
  pitchStatus: document.querySelector('#pitch-status'),
  pitchScene: document.querySelector('#pitch-scene'),
  pitchAnnouncement: document.querySelector('#pitch-announcement'),
  pitchAnnouncementText: document.querySelector('#pitch-announcement-text'),
  pitchBatterName: document.querySelector('#pitch-batter-name'),
  pitchPartnerName: document.querySelector('#pitch-partner-name'),
  pitchBowlerName: document.querySelector('#pitch-bowler-name'),
};

const scorecard = {
  firstName: document.querySelector('#innings-one-name'),
  firstDetail: document.querySelector('#innings-one-detail'),
  firstScore: document.querySelector('#innings-one-score'),
  firstProgress: document.querySelector('#innings-one-progress'),
  firstNote: document.querySelector('#innings-one-note'),
  secondName: document.querySelector('#innings-two-name'),
  secondDetail: document.querySelector('#innings-two-detail'),
  secondScore: document.querySelector('#innings-two-score'),
  secondProgress: document.querySelector('#innings-two-progress'),
  secondNote: document.querySelector('#innings-two-note'),
};

const outcomes = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 6, 6, 'W'];
const teamLineups = {
  India: { flag: '🇮🇳', kit: '#1380d3', lineup: ['A. Mehta', 'R. Kapoor', 'V. Khanna', 'A. Nair', 'D. Malhotra', 'K. Sethi', 'M. Bhatia', 'S. Reddy', 'H. Anand', 'P. Gill', 'T. Menon'] },
  Pakistan: { flag: '🇵🇰', kit: '#087541', lineup: ['A. Khan', 'R. Malik', 'F. Abbas', 'Z. Shah', 'H. Qureshi', 'S. Iqbal', 'U. Farooq', 'N. Siddiqui', 'K. Javed', 'M. Raza', 'B. Aslam'] },
  Australia: { flag: '🇦🇺', kit: '#e3b52c', lineup: ['J. Lawson', 'M. Harper', 'B. Callum', 'T. Fraser', 'L. Mitchell', 'R. Bennett', 'C. Ward', 'E. Dawson', 'N. Reid', 'A. Parker', 'S. Fletcher'] },
  England: { flag: '🇬🇧', kit: '#c83e49', lineup: ['H. Carter', 'O. Brooks', 'J. Whitmore', 'F. Clarke', 'T. Webb', 'A. Sutton', 'M. Palmer', 'E. Foster', 'W. Turner', 'R. Ellis', 'C. Morris'] },
  'South Africa': { flag: '🇿🇦', kit: '#39a568', lineup: ['K. Mokoena', 'T. Daniels', 'L. Jacobs', 'S. Botha', 'A. Ndlovu', 'M. Petersen', 'R. Dlamini', 'J. van Wyk', 'B. Nkosi', 'D. Coetzee', 'P. Maseko'] },
  'New Zealand': { flag: '🇳🇿', kit: '#252a35', lineup: ['F. Taylor', 'L. Bennett', 'C. McKay', 'J. Rangi', 'M. Wilson', 'A. Fraser', 'T. Cooper', 'R. Clarke', 'D. Foster', 'H. Walker', 'N. King'] },
  'Sri Lanka': { flag: '🇱🇰', kit: '#5969bf', lineup: ['D. Perera', 'K. Jayasuriya', 'M. Fernando', 'A. Silva', 'R. De Alwis', 'T. Bandara', 'N. Wickrama', 'S. Herath', 'P. Jayawardene', 'L. Kumara', 'V. Senanayake'] },
  Bangladesh: { flag: '🇧🇩', kit: '#23956a', lineup: ['R. Hossain', 'T. Rahman', 'M. Chowdhury', 'S. Islam', 'N. Kabir', 'A. Mahmud', 'F. Karim', 'I. Sarker', 'J. Haque', 'B. Uddin', 'K. Das'] },
};
let match = null;
let ballSequence = 0;
let playbackTimer = null;
let animationTimer = null;

function createInnings(teamName, battingLineup) {
  return {
    teamName,
    runs: 0,
    wickets: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    deliveries: [],
    battingLineup,
    batter: battingLineup[0],
    partner: battingLineup[1],
    nextBatter: 2,
  };
}

function oversText(balls) {
  return `${Math.floor(balls / 6)}.${balls % 6}`;
}

function runRate(innings) {
  return innings.balls ? (innings.runs / (innings.balls / 6)).toFixed(2) : '0.00';
}

function activeInnings() {
  return match.innings[match.currentInnings];
}

function updatePitchKits(battingTeam, bowlingTeam) {
  const battingKit = teamLineups[battingTeam].kit;
  const fieldingKit = teamLineups[bowlingTeam].kit;
  ui.pitchScene.style.setProperty('--batting-kit', battingKit);
  ui.pitchScene.style.setProperty('--fielding-kit', fieldingKit);
  ui.pitchScene.querySelectorAll('.player-jersey-batter').forEach((player) => {
    player.style.fill = battingKit;
  });
  ui.pitchScene.querySelectorAll('.player-jersey-field, .fielder path:nth-of-type(2)').forEach((player) => {
    player.style.fill = fieldingKit;
  });
}

function updateTeamPicker() {
  const home = ui.homeTeamSelect.value;
  const away = ui.awayTeamSelect.value;
  const overs = Number(document.querySelector('input[name="overs"]:checked').value);
  ui.homeTeamFlag.textContent = teamLineups[home].flag;
  ui.awayTeamFlag.textContent = teamLineups[away].flag;
  ui.homeCrowdFlag.textContent = teamLineups[home].flag;
  ui.awayCrowdFlag.textContent = teamLineups[away].flag;
  ui.homeTeamSelect.setCustomValidity(home === away ? 'Choose a different away team.' : '');
  ui.pageTitle.innerHTML = `${home} <span>vs</span> ${away}.`;
  ui.setupHeading.textContent = `${home} vs ${away}.`;
  ui.pitchTitle.textContent = `${home} versus ${away} under the stadium lights`;
  ui.matchLabel.textContent = `${home.toUpperCase()} VS ${away.toUpperCase()} · MATCH NIGHT`;
  ui.formatPreview.textContent = `${overs}-OVER INTERNATIONAL SHOWDOWN`;
  ui.formatLabel.textContent = `${overs}-OVER SHOWDOWN`;
  ui.homeName.textContent = home.toUpperCase();
  ui.awayName.textContent = away.toUpperCase();
  ui.homeCrest.textContent = teamLineups[home].flag;
  ui.awayCrest.textContent = teamLineups[away].flag;
  ui.homeCrest.style.backgroundColor = teamLineups[home].kit;
  ui.awayCrest.style.backgroundColor = teamLineups[away].kit;
  ui.homeOvers.textContent = `${home.toUpperCase()} · READY TO BAT`;
  ui.awayOvers.textContent = `${away.toUpperCase()} · UNDER THE LIGHTS`;
  ui.liveScoreTeam.textContent = 'MATCH PREVIEW';
  ui.liveScore.textContent = '—';
  ui.liveScoreOvers.textContent = `${overs} OVERS PER SIDE`;
  ui.targetValue.textContent = `${home} vs ${away} · ${overs} overs each`;
  ui.runRateValue.textContent = `${overs} overs · every ball has a story.`;
  ui.homeCrest.title = home;
  ui.awayCrest.title = away;
  document.querySelector('.scoreboard').setAttribute('aria-label', `${home} versus ${away} live scoreboard`);
  updatePitchKits(home, away);
  ui.pitchBatterName.textContent = teamLineups[home].lineup[0];
  ui.pitchPartnerName.textContent = teamLineups[home].lineup[1];
  ui.pitchBowlerName.textContent = teamLineups[away].lineup[0];
  ui.battingTeamName.textContent = home;
  ui.miniBattingCrest.textContent = teamLineups[home].flag;
  ui.bowlingLine.textContent = `${teamLineups[away].lineup[0]} has the ball for ${away}.`;
  ui.commentaryText.textContent = `The floodlights are on. ${home} vs ${away}. The whole ground is holding its breath.`;
  scorecard.firstName.textContent = home;
  scorecard.secondName.textContent = away;
  ui.scorecardFormat.textContent = `${home.toUpperCase()} VS ${away.toUpperCase()} · ${overs} OVER SHOWDOWN`;
  document.querySelector('#innings-one-detail').textContent = 'Waiting for the first ball';
  document.querySelector('#innings-two-detail').textContent = 'The chase';
  document.querySelector('.pitch-card').setAttribute('aria-label', `Live ${home} versus ${away} cricket pitch`);
}

function updateScoreboard() {
  const [first, second] = match.innings;
  const homeInnings = match.innings.find((innings) => innings.teamName === match.home);
  const awayInnings = match.innings.find((innings) => innings.teamName === match.away);
  const totalOvers = match.overs * 6;
  const batting = activeInnings();
  const bowling = match.innings[1 - match.currentInnings];
  const chaseTarget = first.runs + 1;
  const isChasing = match.currentInnings === 1;

  ui.homeName.textContent = match.home.toUpperCase();
  ui.awayName.textContent = match.away.toUpperCase();
  ui.homeCrest.textContent = teamLineups[match.home].flag;
  ui.awayCrest.textContent = teamLineups[match.away].flag;
  ui.homeCrest.style.backgroundColor = teamLineups[match.home].kit;
  ui.awayCrest.style.backgroundColor = teamLineups[match.away].kit;
  ui.homeCrest.title = match.home;
  ui.awayCrest.title = match.away;
  ui.homeScore.innerHTML = `${homeInnings.runs}<span class="team-wickets">/${homeInnings.wickets}</span>`;
  ui.awayScore.innerHTML = `${awayInnings.runs}<span class="team-wickets">/${awayInnings.wickets}</span>`;
  ui.homeOvers.textContent = `${oversText(homeInnings.balls)} OVERS${homeInnings === batting && !match.finished ? ' · BATTING' : ''}`;
  ui.awayOvers.textContent = `${oversText(awayInnings.balls)} OVERS${awayInnings === batting && !match.finished ? ' · BATTING' : ''}`;
  ui.liveScoreTeam.textContent = `${batting.teamName.toUpperCase()} ${match.finished ? 'FINAL SCORE' : 'BATTING'}`;
  ui.liveScore.textContent = `${batting.runs}/${batting.wickets}`;
  ui.liveScoreOvers.textContent = `${oversText(batting.balls)} / ${match.overs} OVERS`;
  ui.formatLabel.textContent = `${match.overs}-OVER SHOWDOWN`;
  ui.scorecardFormat.textContent = `${match.home.toUpperCase()} VS ${match.away.toUpperCase()} · ${match.overs} OVERS`;

  if (match.finished) {
    ui.liveLabel.innerHTML = '<span class="live-dot"></span> MATCH COMPLETE';
    ui.inningsLabel.textContent = 'FULL TIME · THAT’S A WRAP';
  } else {
    ui.liveLabel.innerHTML = '<span class="live-dot"></span> LIVE FROM THE STADIUM';
    ui.inningsLabel.innerHTML = `INNINGS ${match.currentInnings + 1}<span>·</span>${batting.teamName.toUpperCase()} BATTING`;
  }

  if (isChasing && !match.finished) {
    ui.targetLabel.textContent = 'THE TARGET';
    ui.targetValue.textContent = `${chaseTarget} to win`;
    const needed = Math.max(0, chaseTarget - batting.runs);
    const remaining = Math.max(0, totalOvers - batting.balls);
    ui.runRateLabel.textContent = 'THE EQUATION';
    ui.runRateValue.textContent = `${needed} from ${remaining} · ${remaining ? (needed / (remaining / 6)).toFixed(2) : '—'} required`;
  } else if (match.currentInnings === 0 && !match.finished) {
    ui.targetLabel.textContent = 'FIRST UP';
    ui.targetValue.textContent = `${batting.teamName} are setting the pace`;
    ui.runRateLabel.textContent = 'RUN RATE';
    ui.runRateValue.textContent = `${runRate(batting)} runs per over`;
  } else {
    ui.targetLabel.textContent = 'THE RESULT';
    ui.targetValue.textContent = match.result ?? 'A good game, whichever way it goes.';
    ui.runRateLabel.textContent = 'RUN RATE';
    ui.runRateValue.textContent = `${runRate(batting)} runs per over`;
  }

  const stats = batting;
  ui.boundaryStat.innerHTML = `${stats.fours} <small>× 4</small> &nbsp; ${stats.sixes} <small>× 6</small>`;
  ui.wicketStat.innerHTML = `${stats.wickets} <small>down</small>`;
  ui.rateStat.innerHTML = `${runRate(stats)} <small>rpo</small>`;
  ui.deliveryCount.textContent = batting.deliveries.length
    ? `${batting.balls} ${batting.balls === 1 ? 'BALL' : 'BALLS'} BOWLED`
    : 'NO BALLS YET';

  const teamLabel = batting.teamName;
  ui.battingLabel.textContent = match.finished ? 'MATCH COMPLETE' : `INNINGS ${match.currentInnings + 1} · AT THE CREASE`;
  ui.miniBattingCrest.textContent = teamLineups[teamLabel].flag;
  ui.battingTeamName.textContent = teamLabel;
  ui.miniScore.textContent = `${batting.runs}/${batting.wickets}`;
  ui.miniOvers.textContent = `${oversText(batting.balls)} overs`;
  ui.pitchBatterName.textContent = batting.batter;
  ui.pitchPartnerName.textContent = batting.partner;
  const bowler = bowling.battingLineup[Math.floor(batting.balls / 6) % bowling.battingLineup.length];
  ui.bowlingLine.textContent = `${bowler} has the ball for ${bowling.teamName}.`;
  ui.pitchBowlerName.textContent = bowler;
  ui.pitchScene.classList.toggle('batting-india', batting.teamName === 'India');
  ui.pitchScene.classList.toggle('batting-pakistan', batting.teamName === 'Pakistan');
  ui.pitchScene.classList.toggle('fielding-india', bowling.teamName === 'India');
  ui.pitchScene.classList.toggle('fielding-pakistan', bowling.teamName === 'Pakistan');
  updatePitchKits(batting.teamName, bowling.teamName);
  document.querySelector('.pitch-player-strip .player-label').textContent = `${batting.teamName.toUpperCase()} · ON STRIKE`;
  document.querySelector('.pitch-partner .player-label').textContent = `${batting.teamName.toUpperCase()} · NON-STRIKER`;
  document.querySelector('.pitch-bowler .player-label').textContent = `${bowling.teamName.toUpperCase()} · WITH THE BALL`;
  if (match.finished) ui.pitchStatus.textContent = 'FULL TIME · WHAT A GAME';
  syncPlaybackControls();

  updateScorecard(first, second, totalOvers);
  renderRecentBalls(batting);
}

function syncPlaybackControls() {
  if (!match) return;
  const playing = match.isAutoPlaying;
  ui.autoplayButton.disabled = match.finished || match.isPlayingOver;
  ui.autoplayButton.setAttribute('aria-pressed', String(playing));
  ui.autoplayButton.firstElementChild.textContent = playing ? 'Ⅱ' : '▶';
  ui.autoplayButton.childNodes[0].textContent = playing ? 'PAUSE MATCH ' : 'AUTO-PLAY MATCH ';
  ui.bowlButton.disabled = match.finished || match.isPlayingOver || match.isAnimating || playing;
  ui.overButton.disabled = match.finished || match.isPlayingOver || match.isAnimating || playing;
}

function updateScorecard(first, second, totalOvers) {
  const firstIsDone = match.currentInnings > 0 || match.finished;
  const secondHasStarted = second.balls > 0 || match.currentInnings > 0;
  scorecard.firstName.textContent = first.teamName;
  scorecard.firstDetail.textContent = firstIsDone
    ? `${oversText(first.balls)} overs · ${first.wickets} ${first.wickets === 1 ? 'wicket' : 'wickets'}`
    : 'First innings · batting';
  scorecard.firstScore.innerHTML = firstIsDone
    ? `${first.runs} <span>/ ${first.wickets}</span>`
    : `${first.runs} <span>/ ${first.wickets}</span>`;
  scorecard.firstProgress.style.width = `${Math.min(100, (first.balls / totalOvers) * 100)}%`;
  scorecard.firstNote.textContent = firstIsDone
    ? `${first.fours} fours · ${first.sixes} sixes · ${runRate(first)} runs per over`
    : `${oversText(first.balls)} of ${match.overs} overs bowled`;

  scorecard.secondName.textContent = second.teamName;
  scorecard.secondDetail.textContent = match.finished
    ? `${oversText(second.balls)} overs · ${second.wickets} ${second.wickets === 1 ? 'wicket' : 'wickets'}`
    : secondHasStarted ? 'Second innings · chasing' : 'The chase';
  scorecard.secondScore.innerHTML = secondHasStarted
    ? `${second.runs} <span>/ ${second.wickets}</span>`
    : '— <span>/ —</span>';
  scorecard.secondProgress.style.width = secondHasStarted ? `${Math.min(100, (second.balls / totalOvers) * 100)}%` : '0%';
  scorecard.secondNote.textContent = secondHasStarted
    ? `${second.fours} fours · ${second.sixes} sixes · ${runRate(second)} runs per over`
    : 'One innings at a time.';
}

function renderRecentBalls(innings) {
  const recent = innings.deliveries.slice(-12);
  if (!recent.length) {
    ui.recentContent.innerHTML = '<span class="empty-ball" aria-hidden="true">·</span><p>Your first delivery is just a tap away.</p>';
    return;
  }

  ui.recentContent.replaceChildren();
  const list = document.createElement('div');
  list.className = 'ball-list';
  recent.forEach((delivery) => {
    const ball = document.createElement('span');
    ball.className = `ball-result${delivery === 'W' ? ' wicket' : delivery === 4 ? ' boundary' : delivery === 6 ? ' six' : ''}`;
    ball.textContent = delivery === 'W' ? 'W' : String(delivery);
    ball.setAttribute('aria-label', delivery === 'W' ? 'Wicket' : `${delivery} ${delivery === 1 ? 'run' : 'runs'}`);
    list.append(ball);
  });
  const over = document.createElement('span');
  over.className = 'over-mark';
  over.textContent = `MOST RECENT ${recent.length} ${recent.length === 1 ? 'DELIVERY' : 'DELIVERIES'} · ${innings.teamName.toUpperCase()}`;
  ui.recentContent.append(list, over);
}

function describeDelivery(outcome, innings, overNumber, ballNumber, striker, bowler) {
  const score = `${innings.runs}/${innings.wickets}`;
  if (outcome === 'W') return `Gone! ${striker} has to go — ${bowler} finds the breakthrough. ${score} after ${overNumber}.${ballNumber}.`;
  if (outcome === 6) return `Up, up and away! ${striker} launches ${bowler} over the rope for six. ${score}!`;
  if (outcome === 4) return `Cracked away! ${striker} beats the field and races to the boundary. Four! ${score}.`;
  if (outcome === 0) return `A probing delivery from ${bowler}. ${striker} can't get that away — dot ball. ${score}.`;
  if (outcome === 1) return `Soft hands from ${striker}; they turn and run. ${innings.teamName} move to ${score}.`;
  return `In the gap! ${striker} picks up ${outcome} and they turn for home. ${score}!`;
}

function finishInnings() {
  const innings = activeInnings();
  const isChasing = match.currentInnings === 1;
  const oversFinished = innings.balls >= match.overs * 6;
  const allOut = innings.wickets >= 10;

  if (isChasing && innings.runs > match.innings[0].runs) {
    const wicketsRemaining = 10 - innings.wickets;
    match.result = `${innings.teamName} win by ${wicketsRemaining} ${wicketsRemaining === 1 ? 'wicket' : 'wickets'}`;
    endMatch();
    return;
  }

  if (!oversFinished && !allOut) return;

  if (match.currentInnings === 0) {
    match.currentInnings = 1;
    ui.pitchStatus.textContent = 'INNINGS 2 · THE CHASE IS ON';
    ui.commentaryText.textContent = `${match.innings[0].teamName} set ${match.innings[0].runs}. ${match.innings[1].teamName}, the chase is on — you’ve got ${match.innings[0].runs + 1} to win.`;
    ui.commentaryOver.textContent = 'INNINGS BREAK · THE CHASE IS ON';
    ui.gameHeading.textContent = 'The chase is on.';
    ui.gameCopy.textContent = `${match.innings[1].teamName} need ${match.innings[0].runs + 1} to take the win.`;
  } else if (innings.runs === match.innings[0].runs) {
    match.result = 'It’s a tie — what a game';
    endMatch();
  } else {
    const margin = match.innings[0].runs - innings.runs;
    match.result = `${match.innings[0].teamName} win by ${margin} ${margin === 1 ? 'run' : 'runs'}`;
    endMatch();
  }
}

function endMatch() {
  match.finished = true;
  match.isAutoPlaying = false;
  if (playbackTimer !== null) {
    window.clearTimeout(playbackTimer);
    playbackTimer = null;
  }
  ui.resultHeading.textContent = match.result.includes('tie') ? 'You couldn’t split them.' : 'That’s a wrap.';
  ui.resultCopy.textContent = `${match.result}. Thanks for playing — same time next Sunday?`;
  ui.commentaryText.textContent = `${match.result}! What a night of cricket.`;
  ui.commentaryOver.textContent = 'FULL TIME · MATCH COMPLETE';
  setupView.hidden = true;
  gameView.hidden = true;
  resultView.hidden = false;
  ui.actionKicker.textContent = 'THE FINAL WORD';
  ui.matchLabel.textContent = 'FULL TIME · WHAT A GAME';
  ui.pitchStatus.textContent = 'FULL TIME · WHAT A GAME';
  announceDelivery(match.result.includes('tie') ? 'TIE!' : 'FULL TIME');
  updateScoreboard();
}

function announceDelivery(outcome) {
  ui.pitchScene.classList.remove('ball-in-flight', 'boundary', 'four', 'wicket', 'six', 'hit-six', 'running-between-wickets', 'hit-boundary');
  if (outcome === 'FULL TIME' || outcome === 'TIE!') {
    if (animationTimer !== null) window.clearTimeout(animationTimer);
    ui.pitchAnnouncementText.textContent = outcome;
    ui.pitchAnnouncement.classList.remove('pop');
    window.requestAnimationFrame(() => ui.pitchAnnouncement.classList.add('pop'));
    animationTimer = window.setTimeout(() => {
      ui.pitchAnnouncement.classList.remove('pop');
      animationTimer = null;
      if (match) {
        match.isAnimating = false;
        syncPlaybackControls();
      }
    }, 1000);
    return;
  }
  ui.pitchAnnouncementText.textContent = outcome === 'W'
      ? 'WICKET!'
      : outcome === 6
      ? 'SIX!'
      : outcome === 4
        ? 'FOUR!'
        : outcome === 0
          ? 'DOT BALL'
          : `+${outcome} RUN${outcome === 1 ? '' : 'S'}`;
  if (outcome === 'W') ui.pitchScene.classList.add('wicket');
  else if (outcome === 4 || outcome === 6) ui.pitchScene.classList.add('boundary', 'hit-boundary');
  if (outcome === 4) ui.pitchScene.classList.add('four');
  if (outcome === 6) ui.pitchScene.classList.add('six', 'hit-six');
  if (outcome === 1 || outcome === 3 || outcome === 5) ui.pitchScene.classList.add('running-between-wickets');
  ui.pitchAnnouncement.classList.remove('pop');
  window.requestAnimationFrame(() => {
    ui.pitchScene.classList.add('ball-in-flight');
    ui.pitchAnnouncement.classList.add('pop');
  });
  const flight = document.querySelector('#ball-flight');
  const paths = {
    W: 'M 406 143 Q 333 132 302 151',
    4: 'M 406 143 Q 344 115 286 184 Q 193 233 42 152',
    6: 'M 406 143 Q 362 7 284 138 Q 198 61 125 20',
    0: 'M 406 143 Q 352 115 302 151',
  };
  flight.setAttribute('path', paths[outcome] ?? 'M 406 143 Q 352 83 302 151');
  flight.beginElement();
  if (animationTimer !== null) window.clearTimeout(animationTimer);
  animationTimer = window.setTimeout(() => {
    ui.pitchScene.classList.remove('ball-in-flight', 'boundary', 'four', 'wicket', 'six', 'hit-six', 'running-between-wickets', 'hit-boundary');
    ui.pitchScene.querySelector('#stumps-batter').removeAttribute('style');
    animationTimer = null;
    if (match && !match.finished) {
      match.isAnimating = false;
      syncPlaybackControls();
    }
  }, 1100);
}

function playBall() {
  if (!match || match.finished || match.isAnimating) return;
  match.isAnimating = true;
  const innings = activeInnings();
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  const overNumber = Math.floor(innings.balls / 6);
  const ballNumber = innings.balls % 6 + 1;
  const striker = innings.batter;
  const bowlingInnings = match.innings[1 - match.currentInnings];
  const bowler = bowlingInnings.battingLineup[Math.floor(innings.balls / 6) % bowlingInnings.battingLineup.length];
  innings.balls += 1;
  innings.deliveries.push(outcome);

  if (outcome === 'W') {
    innings.wickets += 1;
    if (innings.nextBatter < innings.battingLineup.length) {
      innings.batter = innings.battingLineup[innings.nextBatter];
      innings.nextBatter += 1;
    }
  }
  else {
    innings.runs += outcome;
    if (outcome === 4) innings.fours += 1;
    if (outcome === 6) innings.sixes += 1;
    if (outcome % 2 === 1) [innings.batter, innings.partner] = [innings.partner, innings.batter];
  }
  if (ballNumber === 6) [innings.batter, innings.partner] = [innings.partner, innings.batter];
  ballSequence += 1;
  ui.pitchStatus.textContent = outcome === 'W'
    ? 'HOWZAT! · THE CROWD ERUPTS'
    : outcome === 6
      ? 'SIX! · THE CROWD GOES WILD'
      : outcome === 4
        ? 'FOUR! · RACED TO THE BOUNDARY'
        : outcome === 0
          ? 'DOT BALL · TIGHT LINE'
          : `${outcome} RUN${outcome === 1 ? '' : 'S'} · THEY’RE OFF`;
  announceDelivery(outcome);
  syncPlaybackControls();
  ui.commentaryText.textContent = describeDelivery(outcome, innings, overNumber, ballNumber, striker, bowler);
  ui.commentaryOver.textContent = `OVER ${overNumber}.${ballNumber} · BALL ${ballSequence}`;
  finishInnings();
  if (!match.finished) updateScoreboard();
}

function startMatch(event) {
  event.preventDefault();
  const overs = Number(document.querySelector('input[name="overs"]:checked').value);
  const home = ui.homeTeamSelect.value;
  const away = ui.awayTeamSelect.value;
  if (home === away) {
    ui.homeTeamSelect.setCustomValidity('Choose two different teams to start a match.');
    ui.homeTeamSelect.reportValidity();
    return;
  }
  ui.homeTeamSelect.setCustomValidity('');
  const homeBatsFirst = Math.random() < 0.5;
  const battingFirst = homeBatsFirst ? home : away;
  const battingSecond = homeBatsFirst ? away : home;

  match = {
    home,
    away,
    overs,
    currentInnings: 0,
    innings: [],
    result: null,
    finished: false,
    isPlayingOver: false,
    isAutoPlaying: false,
    isAnimating: false,
  };
  match.innings = [
    createInnings(battingFirst, teamLineups[battingFirst].lineup),
    createInnings(battingSecond, teamLineups[battingSecond].lineup),
  ];
  ballSequence = 0;
  setupView.hidden = true;
  resultView.hidden = true;
  gameView.hidden = false;
  ui.actionKicker.textContent = 'YOU’RE ON THE FIELD';
  ui.gameHeading.textContent = 'You’re in. Feel the roar.';
  ui.gameCopy.textContent = 'One tap. The toss is in. Settle in for the showdown.';
  ui.matchLabel.textContent = `${home.toUpperCase()} VS ${away.toUpperCase()} · LIVE`;
  const bowlingTeam = homeBatsFirst ? away : home;
  ui.commentaryText.textContent = `${battingFirst} win the toss and choose to bat. ${bowlingTeam} take the field. The whole stadium is waiting for ball one!`;
  ui.commentaryOver.textContent = 'FIRST INNINGS · LET THE SHOWDOWN BEGIN';
  ui.pitchStatus.textContent = `${battingFirst.toUpperCase()} BATTING · ${bowlingTeam.toUpperCase()} FIELDING`;
  ui.scorecardFormat.textContent = `${home.toUpperCase()} VS ${away.toUpperCase()} · ${overs} OVER SHOWDOWN`;
  const pace = document.querySelector('input[name="setup-pace"]:checked').value;
  document.querySelector(`input[name="game-pace"][value="${pace}"]`).checked = true;
  updateScoreboard();
  toggleAutoPlay();
}

function playOver() {
  if (!match || match.finished) return;
  const innings = activeInnings();
  const startingInnings = match.currentInnings;
  const ballsRemaining = match.overs * 6 - innings.balls;
  const ballsToPlay = Math.min(6 - (innings.balls % 6) || 6, ballsRemaining);
  match.isPlayingOver = true;
  updateScoreboard();
  let ballsPlayed = 0;

  const playNext = () => {
    if (!match || match.finished || match.currentInnings !== startingInnings || ballsPlayed >= ballsToPlay) {
      if (match && !match.finished) {
        match.isPlayingOver = false;
        updateScoreboard();
      }
      return;
    }
    playBall();
    ballsPlayed += 1;
    if (!match.finished && ballsPlayed < ballsToPlay) {
      window.setTimeout(playNext, 1250);
    } else if (match && !match.finished) {
      match.isPlayingOver = false;
      updateScoreboard();
    }
  };

  playNext();
}

function bowlAutomatically() {
  if (!match || match.finished || !match.isAutoPlaying) return;
  playBall();
  if (!match || match.finished || !match.isAutoPlaying) return;

  const pace = document.querySelector('input[name="game-pace"]:checked').value;
  const overJustFinished = activeInnings().balls > 0 && activeInnings().balls % 6 === 0;
  const delay = pace === 'ball' ? 1850 : overJustFinished ? 2200 : 1250;
  playbackTimer = window.setTimeout(bowlAutomatically, delay);
}

function toggleAutoPlay() {
  if (!match || match.finished || match.isPlayingOver) return;

  if (match.isAutoPlaying) {
    match.isAutoPlaying = false;
    if (playbackTimer !== null) {
      window.clearTimeout(playbackTimer);
      playbackTimer = null;
    }
    ui.pitchStatus.textContent = 'MATCH PAUSED · TAKE YOUR TIME';
    ui.commentaryText.textContent = 'The match is paused. Jump back in whenever you’re ready.';
    ui.commentaryOver.textContent = 'PLAY PAUSED';
  } else {
    match.isAutoPlaying = true;
    ui.pitchStatus.textContent = 'HERE WE GO · BALL IN PLAY';
    ui.commentaryText.textContent = 'And we’re underway! Settle in and enjoy the match.';
    ui.commentaryOver.textContent = 'LIVE ACTION · AUTO-PLAY ON';
    bowlAutomatically();
  }
  updateScoreboard();
}

function resetMatch() {
  if (playbackTimer !== null) {
    window.clearTimeout(playbackTimer);
    playbackTimer = null;
  }
  match = null;
  setupView.hidden = false;
  gameView.hidden = true;
  resultView.hidden = true;
  ui.actionKicker.textContent = 'GET THINGS ROLLING';
  ui.matchLabel.textContent = 'THE GRAND SHOWDOWN';
  ui.liveLabel.innerHTML = '<span class="live-dot"></span> GET YOUR SEAT · MATCH NIGHT';
  ui.inningsLabel.innerHTML = 'INTERNATIONAL SHOWDOWN <span>·</span> UNDER THE LIGHTS';
  ui.formatLabel.textContent = '5-OVER SHOWDOWN';
  ui.homeName.textContent = 'INDIA';
  ui.awayName.textContent = 'PAKISTAN';
  ui.homeCrest.textContent = '🇮🇳';
  ui.awayCrest.textContent = '🇵🇰';
  document.querySelector('.scoreboard').classList.remove('home-pakistan', 'away-india');
  document.querySelector('.scoreboard').classList.add('home-india', 'away-pakistan');
  ui.homeScore.innerHTML = '—<span class="team-wickets"></span>';
  ui.awayScore.innerHTML = '—<span class="team-wickets"></span>';
  ui.homeOvers.textContent = 'INDIA · 0.0 OVERS';
  ui.awayOvers.textContent = 'PAKISTAN · 0.0 OVERS';
  ui.targetLabel.textContent = 'THE SHOWDOWN';
  ui.targetValue.textContent = 'One stadium. Two nations.';
  ui.runRateLabel.textContent = 'MATCH FORMAT';
  ui.runRateValue.textContent = 'Five overs · every ball matters.';
  ui.boundaryStat.innerHTML = '0 <small>× 4</small> &nbsp; 0 <small>× 6</small>';
  ui.wicketStat.innerHTML = '0 <small>down</small>';
  ui.rateStat.innerHTML = '— <small>rpo</small>';
  ui.deliveryCount.textContent = 'NO BALLS YET';
  ui.recentContent.innerHTML = '<span class="empty-ball" aria-hidden="true">·</span><p>Your first delivery is just a tap away.</p>';
  ui.commentaryText.textContent = 'The floodlights are on. India vs Pakistan. The whole ground is holding its breath.';
  ui.commentaryOver.textContent = 'MATCH NIGHT · YOUR SEAT IS WAITING';
  ui.scorecardFormat.textContent = 'INDIA VS PAKISTAN · 5 OVER SHOWDOWN';
  ui.pitchStatus.textContent = 'READY FOR THE FIRST BALL';
  ui.pitchBatterName.textContent = 'Waiting for the toss';
  ui.pitchPartnerName.textContent = 'The crowd is ready';
  ui.pitchBowlerName.textContent = 'Under the lights';
  if (animationTimer !== null) {
    window.clearTimeout(animationTimer);
    animationTimer = null;
  }
  ui.pitchScene.classList.remove('ball-in-flight', 'boundary', 'four', 'wicket', 'six', 'hit-six', 'running-between-wickets', 'hit-boundary');
  ui.pitchScene.classList.remove('batting-india', 'batting-pakistan', 'fielding-india', 'fielding-pakistan');
  ui.pitchScene.querySelector('#stumps-batter').removeAttribute('style');
  ui.autoplayButton.setAttribute('aria-pressed', 'false');
  ui.autoplayButton.firstElementChild.textContent = '▶';
  ui.autoplayButton.childNodes[0].textContent = 'AUTO-PLAY MATCH ';
  ui.bowlButton.disabled = false;
  ui.overButton.disabled = false;
  scorecard.firstName.textContent = 'India';
  scorecard.firstDetail.textContent = 'Waiting for the first ball';
  scorecard.firstScore.innerHTML = '— <span>/ —</span>';
  scorecard.firstProgress.style.width = '0%';
  scorecard.firstNote.textContent = 'Set up a match to get started.';
  scorecard.secondName.textContent = 'Pakistan';
  scorecard.secondDetail.textContent = 'The chase';
  scorecard.secondScore.innerHTML = '— <span>/ —</span>';
  scorecard.secondProgress.style.width = '0%';
  scorecard.secondNote.textContent = 'One innings at a time.';
  updateTeamPicker();
}

ui.homeTeamSelect.addEventListener('change', updateTeamPicker);
ui.awayTeamSelect.addEventListener('change', updateTeamPicker);
document.querySelectorAll('input[name="overs"]').forEach((option) => {
  option.addEventListener('change', updateTeamPicker);
});
form.addEventListener('submit', startMatch);
ui.autoplayButton.addEventListener('click', toggleAutoPlay);
ui.bowlButton.addEventListener('click', playBall);
ui.overButton.addEventListener('click', playOver);
ui.newMatchButton.addEventListener('click', resetMatch);
ui.rematchButton.addEventListener('click', resetMatch);
updateTeamPicker();
