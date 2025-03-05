const picksOpen = true

const defaultSD = {
	g7: [null, null, null],
	g8: [null, null, null],
	g9: [null, null, null],
	g10: [null, null, null],
	user:null
}

const standingsArr = [
	{'name':'PLAYER 3','pts':'363','win':'308','td':'55'},
	{'name':'PLAYER 6','pts':'345','win':'250','td':'95'},
	{'name':'PLAYER 2','pts':'249','win':'186','td':'63'},
	{'name':'PLAYER 4','pts':'216','win':'154','td':'62'},
	{'name':'PLAYER 1','pts':'201','win':'169','td':'32'},
	{'name':'PLAYER 5','pts':'188','win':'147','td':'41'},
]

const gameDict = [
	{'game_id':'g7','team_code':{'home':'KC','away':'HOU'},'team_name':{'home':'CHIEFS','away':'TEXANS'},'ML':{'home':29,'away':171},'TD':{'home':[['TE','T.Kelce',27],['RB','I.Pacheco',28],['WR','X.Worthy',38],['QB','P.Mahomes',80],['RB','K.Hunt',31],['WR','M.Brown',42],['WR','D.Hopkins',45],['TE','N.Gray',70],['WR','J.Watson',125],['D/ST','Chiefs D/ST',125],['WR','J.Smith-Schuster',159],['TE','2+ Kelce',150],['RB','2+ Pacheco',162],],'away':[['RB','J.Mixon',26],['WR','N.Collins',30],['TE','D.Schultz',52],['WR','J.Metchie',67],['WR','R.Woods',84],['WR','X.Hutchinson',84],['D/ST','Texans D/ST',160],['QB','C.Stroud',171],['TE','Irv Smith',142],['RB','2+ Mixon',150],['WR','2+ Collins',200],]},},
	{'game_id':'g8','team_code':{'home':'DET','away':'WAS'},'team_name':{'home':'LIONS','away':'COMMANDERS'},'ML':{'home':36,'away':164},'TD':{'home':[['OL','Lions O-Line',330],['RB','J.Gibbs',13],['RB','D.Montgomery',16],['WR','A.St.Brown',18],['WR','J.Williams',25],['TE','S.LaPorta',27],['WR','T.Patrick',58],['D/ST','Lions D/ST',80],['QB','J.Goff',135],['RB','2+ Gibbs',37],['RB','3+ Gibbs',142],['RB','2+ Montgomery',50],['WR','2+ St.Brown',70],['WR','2+ Williams',136],['TE','2+ LaPorta',145],],'away':[['WR','T.McLaurin',24],['QB','J.Daniels',28],['RB','B.Robinson',30],['RB','A.Ekeler',39],['TE','Z.Ertz',42],['WR','O.Zaccheaus',53],['WR','D.Brown',52],['D/ST','Commanders D/ST',105],['WR','2+ McLaurin',125],['QB','2+ Daniels',182],['RB','2+ Robinson',188],]},},
	{'game_id':'g9','team_code':{'home':'PHI','away':'LAR'},'team_name':{'home':'EAGLES','away':'RAMS'},'ML':{'home':55,'away':145},'TD':{'home':[['RB','S.Barkley',15],['QB','J.Hurts',20],['WR','A.Brown',26],['WR','D.Smith',34],['TE','D.Goedert',50],['D/ST','Eagles D/ST',79],['WR','J.Dotson',136],['RB','K.Gainwell',130],['TE','G.Calcaterra',182],['RB','2+ Barkley',50],['RB','3+ Barkley',194],['QB','2+ Hurts',80],['WR','2+ Brown',148],['WR','2+ Smith',245],],'away':[['RB','K.Williams',20],['WR','P.Nacua',26],['WR','C.Kupp',42],['TE','T.Higbee',60],['TE','C.Parkinson',61],['WR','D.Robinson',69],['D/ST','Rams D/ST',125],['QB','M.Stafford',366],['RB','R.Rivers',205],['WR','T.Atwell',240],['RB','2+ Kyren',89],['WR','2+ Nacua',136],['WR','2+ Kupp',320],]},},
	{'game_id':'g10','team_code':{'home':'BUF','away':'BAL'},'team_name':{'home':'BILLS','away':'RAVENS'},'ML':{'home':104,'away':96},'TD':{'home':[['QB','J.Allen',22],['RB','J.Cook',22],['WR','K.Shakir',32],['WR','K.Coleman',41],['TE','D.Kincaid',44],['WR','M.Hollins',64],['WR','A.Cooper',71],['RB','R.Davis',67],['RB','T.Johnson',69],['D/ST','Bills D/ST',90],['TE','D.Knox',79],['WR','C.Samuel',84],['RB','2+ Cook',90],['QB','2+ Allen',100],],'away':[['RB','D.Henry',14],['TE','M.Andrews',28],['WR','R.Bateman',29],['QB','L.Jackson',32],['TE','I.Likely',44],['RB','J.Hill',79],['WR','T.Wallace',81],['D/ST','Ravens D/ST',84],['WR','N.Agholor',113],['RB','2+ Henry',38],['RB','3+ Henry',160],['TE','2+ Andrews',160],]},},
]

const picksArchiveDict = {
	'PLAYER1':[[['LAC','CHARGERS','82','incorP'],['J.Metchie','59','incorP'],['L.McConkey','26','corP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['J.Williams','37','incorP'],],[['GB','PACKERS','138','incorP'],['A.Brown','25','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['LAR','RAMS','116','corP'],['P.Nacua','22','incorP'],['A.Jones','22','incorP'],],[['HOU','TEXANS','171','na'],['T.Kelce','27','na'],['N.Collins','30','na'],],[['DET','LIONS','36','na'],['T.Patrick','58','na'],['J.Daniels','28','na'],],[['LAR','RAMS','145','na'],['A.Brown','26','na'],['P.Nacua','26','na'],],[['BAL','RAVENS','96','na'],['J.Allen','22','na'],['R.Bateman','29','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PLAYER2':[[['HOU','TEXANS','118','incorP'],['N.Collins','25','corP'],['Q.Johnston','35','incorP'],],[['PIT','STEELERS','168','incorP'],['I.Likely','39','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['B.Nix','59','incorP'],],[['GB','PACKERS','138','incorP'],['Eagles D/ST','72','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['J.Daniels','29','incorP'],],[['LAR','RAMS','116','corP'],['C.Kupp','29','incorP'],['Vikings D/ST','102','incorP'],],[['KC','CHIEFS','29','na'],['P.Mahomes','80','na'],['J.Mixon','26','na'],],[['WAS','COMMANDERS','164','na'],['2+ Montgomery','50','na'],['D.Brown','52','na'],],[['LAR','RAMS','145','na'],['J.Hurts','20','na'],['T.Higbee','60','na'],],[['BAL','RAVENS','96','na'],['K.Coleman','41','na'],['3+ Henry','160','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PLAYER3':[[['HOU','TEXANS','118','corP'],['D.Schultz','46','incorP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['J.McLaughlin','41','incorP'],],[['GB','PACKERS','138','incorP'],['D.Smith','33','incorP'],['J.Jacobs','20','corP'],],[['WAS','COMMANDERS','120','corP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['HOU','TEXANS','171','na'],['T.Kelce','27','na'],['C.Stroud','171','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PLAYER4':[[['LAC','CHARGERS','82','incorP'],['N.Collins','25','corP'],['Q.Johnston','35','incorP'],],[['PIT','STEELERS','168','incorP'],['I.Likely','39','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['K.Coleman','42','incorP'],['B.Nix','59','incorP'],],[['GB','PACKERS','138','incorP'],['Eagles D/ST','72','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['J.Daniels','29','incorP'],],[['LAR','RAMS','116','corP'],['C.Kupp','29','incorP'],['Vikings D/ST','102','incorP'],],[['KC','CHIEFS','29','na'],['D.Hopkins','45','na'],['X.Hutchinson','84','na'],],[['WAS','COMMANDERS','164','na'],['2+ Montgomery','50','na'],['D.Brown','52','na'],],[['LAR','RAMS','145','na'],['J.Hurts','20','na'],['T.Higbee','60','na'],],[['BAL','RAVENS','96','na'],['K.Coleman','41','na'],['3+ Henry','160','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PLAYER5':[[['LAC','CHARGERS','82','incorP'],['J.Metchie','59','incorP'],['L.McConkey','26','corP'],],[['BAL','RAVENS','32','corP'],['L.Jackson','35','incorP'],['J.Warren','47','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['J.Williams','37','incorP'],],[['GB','PACKERS','138','incorP'],['A.Brown','25','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['LAR','RAMS','116','corP'],['P.Nacua','22','incorP'],['A.Jones','22','incorP'],],[['KC','CHIEFS','29','na'],['X.Worthy','38','na'],['N.Collins','30','na'],],[['DET','LIONS','36','na'],['T.Patrick','58','na'],['J.Daniels','28','na'],],[['LAR','RAMS','145','na'],['A.Brown','26','na'],['P.Nacua','26','na'],],[['BAL','RAVENS','96','na'],['J.Allen','22','na'],['R.Bateman','29','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
	'PLAYER6':[[['HOU','TEXANS','118','corP'],['N.Collins','25','corP'],['J.Dobbins','24','incorP'],],[['BAL','RAVENS','32','corP'],['D.Henry','15','corP'],['N.Harris','34','incorP'],],[['BUF','BILLS','38','corP'],['J.Allen','18','incorP'],['C.Sutton','28','incorP'],],[['PHI','EAGLES','62','corP'],['S.Barkley','16','incorP'],['J.Jacobs','20','corP'],],[['TB','BUCCANEERS','80','incorP'],['B.Irving','17','corP'],['B.Robinson','28','incorP'],],[['MIN','VIKINGS','84','incorP'],['K.Williams','18','corP'],['A.Jones','22','incorP'],],[['KC','CHIEFS','29','na'],['T.Kelce','27','na'],['J.Mixon','26','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],[['-','-','-','na'],['-','-','na'],['-','-','na'],],],
}

const curGameIdx = 6
const curGameIdxRound = 0

// EXPORT ARRAY
const dbData = {
	picksOpen: picksOpen,
	gameDict: gameDict,
	defaultSD: defaultSD,
	standingsArr: standingsArr,
	picksArchiveDict: picksArchiveDict,
	curGameIdx: curGameIdx,
	curGameIdxRound: curGameIdxRound,
}

export default dbData;

