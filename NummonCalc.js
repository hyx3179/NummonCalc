dojo.declare("classes.managers.NummonStatsManager", com.nuclearunicorn.core.TabManager, {

	game: null,
	lang: "en",
	i18ng: null,
	i18nData: {
		"en": {
			"catnip": "Catnip / Sec",

			"getCatnipInWarmSpring": "During Warm Spring",
			"getCatnipColdWinter": "During Cold Winter",

			"science": "Science",

			"getCelestialPerDay": "Chance of Celestial Events",
			"getCelestialAutoSuccess": "Celestial Event Auto Success Rate",
			"getMaxComped": "Maximum Helpful Compediums",
			"getBlueprintCraft": "Blueprints Per Craft",

			"titanium": "Titanium",

			"getTitPerZebraTrade": "Titanium Per Zebra Trade",
			"getZebraTradesLeftToMaxTit": "Trades Left to Cap Titanium",
			"getZebraTradesToMaxTit": "Max Zebra Trades to Cap Titanium",

			"pollution": "污染",

			"getPollutionTick": "pollution per second",
			"getCoMax": "Max of CO2",

			"unicorns": "Unicorns",

			"getBestUniBuilding": "Best Unicorn Building",
			"getBestAliBuilding": "Best Alicorn Building Per Ivory Cost",
			"getNecrocornsPerSecond": "Necrocorns Per Second",
			"getNecrocornTime": "Time Until Next Necrocorn",
			"getLeviChance": "Chance per year of Leviathans",

			"religion": "Religion",

			"getReligionProductionBonusCap": "Solar Revolution Limit",
			"getlowestRatio": "下一次元超越等级减少的顿悟",
			"getEpiphany": "Progress to Next Transcendence Tier",
			"getRecNextTranscendTierProgress": "Rec.Progress to Next Transcendence Tier",

			"paragon": "Paragon Bonus",

			"getParagonProductionBonus": "Production Bonus",
			"getParagonStorageBonus": "Storage Bonus",

			"time": "Time",

			"getTCPerSacrifice": "Time Crystals per Sacrifice",
			"getRelicPerTCRefine": "Relics Per Time Crystal Refine",

			"resourceRetrieval": "资源回复",

			"getTradeTC": "每跳一年的时间水晶贸易收入",
			"getResourceRetrievalTCBackYears": "下级资源回复亏损至盈利的时间",

			"others": "Others",

			"getBestMagnetoBuilding": "Best Magneto/Steamwork Building",
			"getUraniumForThoriumReactors": "Uranium/Sec for Thorium Reactors",
			"getDarkFutureYears": "Years until Dark Future",
			"getBestRelicBuilding": "Best improve Relic Building",
			"getAIlv15Time": "Time until AI level 15",
			"getFutureSeason": "Seasons until next TemporalParadox",
			"getadjustDay": "Time until 1100 Crypto Price",

			"best.none": "No Building",
			"infinity": "Infinity",
			"sec": "/sec",
			"done": "Done",
		},
		"zh": {
			"catnip": "猫薄荷 / 秒",

			"getCatnipInWarmSpring": "暖春",
			"getCatnipColdWinter": "寒冬",

			"science": "科学",

			"getCelestialPerDay": "天文事件每天出现的几率",
			"getCelestialAutoSuccess": "天文事件自动观测的几率",
			"getMaxComped": "增加科学库存的概要数量上限",
			"getBlueprintCraft": "每次工艺制作的蓝图",

			"titanium": "钛",

			"getTitPerZebraTrade": "单次斑马贸易的钛期望数量",
			"getZebraTradesLeftToMaxTit": "钛满仓还需要与斑马贸易(次)",
			"getZebraTradesToMaxTit": "钛从零至满仓总共要与斑马贸易(次)",

			"pollution": "污染",

			"getPollutionTick": "二氧化碳排放量",
			"getCoMax": "二氧化碳最大值",

			"unicorns": "独角兽宗教",

			"getBestUniBuilding": "最佳独角兽性价比建筑",
			"getBestAliBuilding": "象牙性价比最高天角兽建筑",
			"getNecrocornsPerSecond": "每秒获得的死灵兽",
			"getNecrocornTime": "距离下一个死灵兽的时间",
			"getLeviChance": "利维坦每年到来降临的几率",

			"religion": "太阳教团",

			"getReligionProductionBonusCap": "太阳革命极限加成",
			"getEpiphany": "当前顿悟值",
			"getAfterAdoreEpiphany": "赞美群星后的顿悟值",
			"getAdoreSloar": "赞美群星再赞美太阳的太阳革命加成",

			"Transcend": "次元超越",

			"getlowestRatio": "进行次元超越的顿悟减少值",
			"getRecNextTranscendTierProgress": "推荐次元超越的当前顿悟值",
			"getBoolean": "赞美群星前(是/否)次元超越",

			"paragon": "领导力加成",

			"getParagonProductionBonus": "生产加成",
			"getParagonStorageBonus": "库存加成",
			"getEffectLeader": "领袖特质效果",

			"time": "时间",

			"getTCPerSacrifice": "每次天角兽献祭的时间水晶值",
			"getRelicPerTCRefine": "每次时间水晶精炼的遗物值",

			"resourceRetrieval": "资源回复",

			"getTradeTC": "当前周期烧水晶的水晶贸易收入",
			"getTradeTCAvg": "平均周期烧水晶的水晶平均收入",
			"getResourceRetrievalTCBackYears": "升级后烧水晶使水晶回本的预计时间",

			"others": "其他",

			"getBestMagnetoBuilding": "最佳磁电机/蒸汽工坊",
			"getUraniumForThoriumReactors": "每秒钍反应堆等效总耗铀",
			"getDarkFutureYears": "距离黑暗未来的惩罚(年)",
			"getBestRelicBuilding": "获取最佳遗物建筑",
			"getBestUnobtainiumBuilding": "难得素最佳太空建筑",
			"getAIlv15Time": "天网觉醒倒计时(现实)",
			"getFutureSeason": "距离下次时间悖论(季节)",
			"getadjustDay": "黑币最高价格期望倒计时(现实)",

			"best.none": "无",
			"infinity": "∞",
			"sec": "/秒",
			"done": "已完成",
		},
	},

	i18n: function(key, args) {
		if (key[0] == "$") {
			return this.i18ng(key.slice(1));
		}
		var value = this.i18nData[this.lang][key];
		if (!value) {
			value = this.i18nData["en"][key];
			if (!value) {
				console.error("key \"" + key + "\" not found");
				return "$" + key;
			}
			console.error("key \"" + key + "\" not found in " + this.lang);
		}
		if (args) {
			for (var i = 0; i < args.length; i++) {
				value = value.replace("{" + i + "}", args[i]);
			}
		}
		return value;
	},

	roundThisNumber: function(num) {
		num *= 1000;
		num += .5;
		num = Math.floor(num);
		num /= 1000;
		return num;
	},

	getButton: function(tab, buttonName) {
		for (var i in this.game.tabs[tab].children) {
			if (this.game.tabs[tab].children[i].opts.building == buttonName) {
				return parseInt(i);
			}
		}
	},

	getButtonPrice: function(tabName, metaNumber, buttonName, resName) {
		var b = this.game[tabName].meta[metaNumber];
		for (let i = 0; i < b.meta.length; i++) {
			if (b.meta[i].name == buttonName) {
				var metaData = b.meta[i];
				break;
			}
		}
		for (let i = 0; i < metaData.prices.length; i++) {
			if (metaData.prices[i].name == resName) {
				var cost = metaData.prices[i].val;
				break;
			}
		}
		var priceRatio = metaData.priceRatio;
		if (tabName == "bld") {
			priceRatio += game.getEffect("priceRatio");
		}
		return cost * Math.pow(priceRatio, metaData.on);
	},

	makeNiceString: function(num, numDigits = 3) {
		if (typeof(num) == "number" && num != Infinity) {
			num = num.toFixed(numDigits);
			num = num.toString();
			var decimal = num.substr(num.indexOf("."));
			if (decimal == "." + Array(numDigits + 1).join("0")) {
				num = num.substr(0, num.indexOf("."));
			}
			for (var i = (num.indexOf(".") == -1 ? num.length - 3 : num.indexOf(".") - 3); i > 0; i -= 3) {
				num = num.substr(0, i) + "," + num.substr(i);
			}
		} else {
			num = num.toString();
		}
		return num;
	},

	// CATNIP :

	getPotentialCatnip: function(number) {
		var fieldProd = this.game.getEffect('catnipPerTickBase') * number;
		var vilProd = (this.game.village.getResProduction().catnip) ? this.game.village.getResProduction().catnip * (1 + this.game.getEffect('catnipJobRatio')) : 0;
		var baseProd = fieldProd + vilProd;
		baseProd *= 1 + this.game.getEffect("catnipRatio");

		var paragonBonus = this.game.challenges.isActive("winterIsComing") ? 0 : this.game.prestige.getParagonProductionRatio();
		baseProd *= 1 + paragonBonus;

		baseProd *= 1 + this.game.religion.getSolarRevolutionRatio() * (1 + this.game.bld.pollutionEffects["solarRevolutionPollution"]);

		baseProd *= 1 + (this.game.getEffect("blsProductionBonus") * this.game.resPool.get("sorrow").value);

		baseProd = this.game.calendar.cycleEffectsFestival({
			catnip: baseProd
		})['catnip'];

		baseProd *= 1 + this.game.bld.pollutionEffects["catnipPollutionRatio"];

		var baseDemand = this.game.village.getResConsumption()['catnip'];
		baseDemand *= 1 + this.game.getEffect("catnipDemandRatio");
		if (this.game.village.sim.kittens.length > 0 && this.game.village.happiness > 1) {
			var happyCon = Math.max(this.game.village.happiness * (1 + this.game.getEffect("hapinnessConsumptionRatio")) - 1, 0);
			if (this.game.challenges.isActive("anarchy")) {
				baseDemand *= 1 + happyCon * (1 + this.game.getEffect("catnipDemandWorkerRatioGlobal"));
			} else {
				baseDemand *= 1 + happyCon * (1 + this.game.getEffect("catnipDemandWorkerRatioGlobal")) * (1 - this.game.village.getFreeKittens() / this.game.village.sim.kittens.length);
			}
		}
		baseProd += baseDemand;

		baseProd += this.game.getResourcePerTickConvertion('catnip');
		baseProd *= 1 + this.game.timeAccelerationRatio();
		baseProd *= (game.opts.usePerSecondValues) ? this.game.ticksPerSecond : 1;
		return baseProd;
	},

	getCatnipColdWinter: function() {
		var Season = this.game.calendar.seasons;
		for (var i in Season) {
			if (Season[i].name == "winter") {
				var ColdWintercatnip = Season[i].modifiers.catnip;
				break;
			}
		}
		if (game.calendar.year > 3) {
			ColdWintercatnip -= 0.15;
			ColdWintercatnip *= 1 + this.game.getLimitedDR(this.game.getEffect("coldHarshness"), 1);
			if (game.science.getPolicy("communism").researched) {
				ColdWintercatnip = 0;
			}
		}
		var catnip = this.getPotentialCatnip(ColdWintercatnip);
		return catnip;
	},
	getCatnipInWarmSpring: function() {
		var Season = this.game.calendar.seasons;
		for (var i in Season) {
			if (Season[i].name == "spring") {
				var WarmSpringRatio = Season[i].modifiers.catnip;
				break;
			}
		}
		WarmSpringRatio += 0.15;
		WarmSpringRatio *= 1 + this.game.getLimitedDR(this.game.getEffect("springCatnipRatio"), 2);
		var catnip = this.getPotentialCatnip(WarmSpringRatio);
		return catnip;
	},

	// SCIENCE :

	getCelestialPerDay: function() {
		if (game.bld.getBuildingExt('library').meta.on <= 0) {
			return "0%";
		}
		var chanceRatio = 1;
		if (this.game.prestige.getPerk("chronomancy").researched) {
			chanceRatio *= 1.1;
		}
		chanceRatio *= 1 + this.game.getEffect("timeRatio") * 0.25;

		var chance = 25;
		chance += this.game.getEffect("starEventChance") * 10000;
		chance *= chanceRatio * 0.01;
		if (this.game.prestige.getPerk("astromancy").researched) {
			chance *= 2;
		}

		return game.getDisplayValueExt(chance) + "%";
	},

	getCelestialAutoSuccess: function() {
		if (game.bld.getBuildingExt('library').meta.on <= 0) {
			return "0%";
		}
		var autoChance = this.game.getEffect("starAutoSuccessChance") * 100;
		if (this.game.prestige.getPerk("astromancy").researched) {
			autoChance *= 2;
		}
		if (game.ironWill) {
			autoChance = Math.max(25, autoChance);
		}
		autoChance = Math.round(autoChance);
		if (autoChance > 100 || this.game.workshop.get("seti").researched) {
			autoChance = 100;
		}
		return autoChance + "%";
	},

	getMaxComped: function() {
		var scienceBldMax = this.game.bld.getEffect("scienceMax");
		var compCap = this.game.bld.getEffect("scienceMaxCompendia");

		var IWRatio = this.game.ironWill ? 10 : 1;
		var blackLibrary = this.game.religion.getTU("blackLibrary");
		if (this.game.prestige.getPerk("codexLeviathanianus").researched) {
			var ttBoostRatio = (0.05 * (1 + blackLibrary.val * (blackLibrary.effects["compendiaTTBoostRatio"] + this.game.getEffect("blackLibraryBonus"))));
			IWRatio *= (1 + ttBoostRatio * this.game.religion.transcendenceTier);
		}

		var compCapFinal = scienceBldMax * IWRatio + compCap;
		compCapFinal /= 10;
		return compCapFinal;
	},

	getBlueprintCraft: function() {
		var blueprint = this.game.getResCraftRatio("blueprint");
		var carft = (game.getCraftRatio() != blueprint);
		var researched = game.science.get('physics').researched;
		if (carft || researched) {
			return 1 + blueprint;
		} else {
			return this.i18n("best.none");
		}
	},

	// TITANIUM :

	getTitPerZebraTrade: function() {
		let rRatio = 0.7 + Math.min(0.3, + game.getEffect("standingRatio") + game.diplomacy.calculateStandingFromPolicies('zebras', game));
		var shipAmount = this.game.resPool.get("ship").value;
		var zebraRelationModifierTitanium = this.game.getEffect("zebraRelationModifier") * 0.015;
		var titaniumPerTrade = (1.5 + shipAmount * 0.03) * (1 + zebraRelationModifierTitanium) * Math.min(0.15 + shipAmount * 0.0035, 1) * rRatio;
		return titaniumPerTrade;
	},

	/*getZebraTradesToMaxTit: function() {
		var titaniumPerTrade = this.getTitPerZebraTrade();
		var maxTitanium = this.game.resPool.get("titanium").maxValue;
		return Math.ceil(maxTitanium / titaniumPerTrade);
	},*/

	getZebraTradesLeftToMaxTit: function() {
		var titaniumPerTrade = this.getTitPerZebraTrade();
		var titToFill = this.game.resPool.get("titanium").maxValue;
		titToFill -= this.game.resPool.get("titanium").value;
		titToFill = Math.ceil(titToFill / titaniumPerTrade);
		if (titToFill < 0) {
			titToFill = 0;
		}
		return titToFill;
	},

	// POLLUTION :

	getPollutionTick: function() {
		var precision = this.game.opts.forceHighPrecision ? 3 : 2;
		var polltionPerTick = this.game.bld.cathPollutionPerTick * this.game.getTicksPerSecondUI();
		if (this.game.bld.cathPollution == 0 || !polltionPerTick) {
			return 0;
		}
		polltionPerTick *= 0.00001;
		if (Math.abs(polltionPerTick) <= 1) {
			polltionPerTick = polltionPerTick.toPrecision(precision);
			var b = polltionPerTick.toString();
			if (b.match('e-')) {
				var c = b.split('e-');
				polltionPerTick = Number(b).toFixed(Number(c[1]) + precision - 1);
			}
		} else {
			polltionPerTick = polltionPerTick.toFixed(precision);
		}
		var plusSign = "+ ";
		if (polltionPerTick <= 0) {
			plusSign = "";
		}
		return plusSign + polltionPerTick + "/" + $I("unit.sec");
	},

	getCoMax: function() {
		var UndissipatednPerTick = this.game.bld.getUndissipatedPollutionPerTick() * 100;
		var coMax = Math.max(UndissipatednPerTick, 0);
		if (this.game.challenges.isActive("postApocalypse") && coMax) {
			coMax = "∞";
		}
		return coMax;
	},

	// UNICORN :

	getBestUniBuilding: function(log = false) {
		var unicornPastureKey = "$buildings.unicornPasture.label";
		var pastureButton = this.getButton(0, "unicornPasture");
		if (typeof pastureButton === "undefined") {
			return this.i18n("best.none");
		}
		var validBuildings = ["unicornTomb", "ivoryTower", "ivoryCitadel", "skyPalace", "unicornUtopia", "sunspire"];
		var unicornsPerSecond = this.game.getEffect("unicornsPerTickBase") * this.game.getTicksPerSecondUI();
		var globalRatio = this.game.getEffect("unicornsGlobalRatio") + 1;
		var religionRatio = this.game.getEffect("unicornsRatioReligion") + 1;
		var paragonRatio = this.game.prestige.getParagonProductionRatio() + 1;
		var faithBonus = this.game.religion.getSolarRevolutionRatio() + 1;
		var cycle = 1;
		if (this.game.calendar.cycles[this.game.calendar.cycle].festivalEffects["unicorns"] != undefined) {
			if (this.game.prestige.getPerk("numeromancy").researched && this.game.calendar.festivalDays) {
				cycle = this.game.calendar.cycles[this.game.calendar.cycle].festivalEffects["unicorns"];
			}
		}
		var onZig = Math.max(this.game.bld.getBuildingExt("ziggurat").meta.on, 1);
		var total = unicornsPerSecond * globalRatio * (this.game.getEffect("unicornsRatioReligion") + 1) * paragonRatio * faithBonus * cycle;
		var baseUnicornsPerRift = 500 * (1 + this.game.getEffect("unicornsRatioReligion") * 0.1);
		var riftChanceRatio = 1;
		if (this.game.prestige.getPerk("unicornmancy").researched) {
			riftChanceRatio *= 1.1;
		}
		var baseRift = this.game.getEffect("riftChance") * riftChanceRatio / (10000 * 2) * baseUnicornsPerRift;

		var bestAmoritization = Infinity;
		var bestBuilding = "";
		var pastureAmor = this.game.bld.getBuildingExt("unicornPasture").meta.effects["unicornsPerTickBase"] * this.game.getTicksPerSecondUI();
		pastureAmor = pastureAmor * globalRatio * (this.game.getEffect("unicornsRatioReligion") + 1) * paragonRatio * faithBonus * cycle;
		pastureAmor = this.getButtonPrice("bld", 0, "unicornPasture", "unicorns") / pastureAmor;

		if (pastureAmor < bestAmoritization) {
			bestAmoritization = pastureAmor;
			bestBuilding = unicornPastureKey;
		}
		for (var i in this.game.tabs[5].zgUpgradeButtons) {
			var btn = this.game.tabs[5].zgUpgradeButtons[i];
			if (validBuildings.indexOf(btn.id) != -1) {
				if (btn.model.visible) {
					var bld = this.game.religion.getZU(btn.id);
					var unicornPrice = 0;
					var tearsPrices = [5, 25, 50, 500, 5e3, 25e3];
					unicornPrice += tearsPrices[i] * Math.pow(1.15, this.game.religion.getZU(btn.id).on) * 2500 / onZig;


					var relBonus = game.getEffect('unicornsRatioReligion') + 1;
					var riftChance = this.game.getEffect("riftChance");
					for (var j in bld.effects) {
						if (j == "unicornsRatioReligion") {
							relBonus += bld.effects[j];
						}
						if (j == "riftChance") {
							riftChance += bld.effects[j];
						}
					}
					var unicornsPerRift = 500 * ((relBonus - 1) * 0.1 + 1);
					var riftBonus = riftChance * riftChanceRatio / (10000 * 2) * unicornsPerRift;
					riftBonus -= baseRift;

					var amor = unicornsPerSecond * globalRatio * relBonus * paragonRatio * faithBonus * cycle;
					amor -= total;
					amor += riftBonus;
					amor = unicornPrice / amor;
					if (amor < bestAmoritization) {
						if (riftBonus > 0 || relBonus > religionRatio && unicornPrice > 0) {
							bestAmoritization = amor;
							bestBuilding = btn.id;
						} else {
							return game.religionTab.render();
						}
					}
				}
			}
		}
		if (bestBuilding != unicornPastureKey) {
			bestBuilding = "$religion.zu." + bestBuilding + ".label";
		}
		return this.i18n(bestBuilding);
	},

	getBestAliBuilding: function() {
		var bestBuilding = ["best.none", "$religion.zu.skyPalace.label", "$religion.zu.unicornUtopia.label", "$religion.zu.sunspire.label"];
		if (!this.game.religion.getZU("skyPalace").unlocked) {
			return this.i18n(bestBuilding[0]);
		}

		var skyPalacePrice = 1.15 ** (this.game.religion.getZU("skyPalace").val) * 125;
		var unicornUtopiaPrice = 1.15 ** (this.game.religion.getZU("unicornUtopia").val) * 1000;
		var sunspirePrice = 1.15 ** (this.game.religion.getZU("sunspire").val) * 750;
		var priceBuilding = [skyPalacePrice, unicornUtopiaPrice, sunspirePrice];

		return this.i18n(bestBuilding[priceBuilding.indexOf(Math.min(...priceBuilding)) + 1]);
	},

	getNecrocornsPerSecond: function() {
		var numAlicorns = this.game.resPool.get("alicorn").value;
		var curCorruption = this.game.religion.corruption;
		var blsBoost = 1 + Math.sqrt(this.game.resPool.get("sorrow").value * this.game.getEffect("blsCorruptionRatio"));
		var corruptionRate = 1;
		if (this.game.resPool.get("necrocorn").value > 0) {
			corruptionRate = 0.25 * (1 + this.game.getEffect("corruptionBoostRatio"));
		}
		corruptionRate *= this.game.getEffect("corruptionRatio") * blsBoost;
		if (numAlicorns <= 0) {
			curCorruption = 0;
			corruptionRate = 0;
		}
		corruptionRate *= this.game.getTicksPerSecondUI();
		var precision = this.game.opts.forceHighPrecision ? 3 : 2;
		corruptionRate = corruptionRate.toPrecision(precision) * 1;
		if (corruptionRate == Infinity) {
			return this.i18n("infinity");
		}
		return corruptionRate + this.i18n("sec");
	},

	getNecrocornTime: function() {
		var numAlicorns = this.game.resPool.get("alicorn").value;
		var curCorruption = this.game.religion.corruption;
		var blsBoost = 1 + Math.sqrt(this.game.resPool.get("sorrow").value * this.game.getEffect("blsCorruptionRatio"));
		var corruptionRate = 1;
		if (this.game.resPool.get("necrocorn").value > 0) {
			corruptionRate = 0.25 * (1 + this.game.getEffect("corruptionBoostRatio"));
		}
		corruptionRate *= this.game.getEffect("corruptionRatio") * blsBoost;
		if (numAlicorns <= 0) {
			curCorruption = 0;
			corruptionRate = 0;
		}
		if (corruptionRate == 0) {
			return this.i18n("infinity");
		}
		return this.game.toDisplaySeconds((1 - curCorruption) / (corruptionRate * this.game.getTicksPerSecondUI()));
	},

	getLeviChance: function() {
		var numPyramids = this.game.religion.getZU("blackPyramid").getEffectiveValue(this.game);
		var numMarkers = this.game.religion.getZU("marker").val;
		var chance = 3.5 * numPyramids * (1 + 0.1 * numMarkers);
		if (chance > 100) {
			return chance = 100 + "%";
		} else {
			return this.game.getDisplayValueExt(chance) * 1 + "%";
		}
	},

	// RELIGION :

	getReligionProductionBonusCap: function() {
		var result = 100 * (10 + this.game.getEffect("solarRevolutionLimit") + (this.game.challenges.getChallenge("atheism").researched ? (this.game.religion.transcendenceTier) : 0)) * (1 + this.game.getLimitedDR(this.game.getEffect("faithSolarRevolutionBoost"), 4));
		return this.game.getDisplayValueExt(result) + "%";
	},

	getAfterAdoreEpiphany: function() {
		if (!game.religion.meta[1].meta[8].on) {
			return game.religion.meta[1].meta[8].label;
		}
		var tt = this.game.religion.transcendenceTier;
		var ttPlus1 = 1;
		if (this.game.religion.getRU("transcendence").on) {
			ttPlus1 = 1 + tt;
		} else if (tt) {
			return '超越没点亲';
		}
		var faithRatio = this.game.religion.faithRatio;
		return faithRatio + this.game.religion.faith * 1e-6 * ttPlus1 * ttPlus1 * 1.01;
	},

	getAdoreSloar: function() {
		if (!game.religion.getRU("solarRevolution").on || !game.religion.meta[1].meta[8].on) {
			return this.i18n("best.none");
		}
		var ttPlus1 = (this.game.religion.getRU("transcendence").on ? this.game.religion.transcendenceTier : 0) + 1;
		var faithRatioAfterAdore = this.game.religion.faithRatio + this.game.religion.faith * 1e-6 * ttPlus1 * ttPlus1 * 1.01;
		var faith = this.game.resPool.resources[14].value;
		var worshipAfterAdore = 0.01 + faith * (1 + game.getUnlimitedDR(faithRatioAfterAdore, 0.1) * 0.1);
		var uncappedBonus = this.game.getUnlimitedDR(worshipAfterAdore, 1000) / 100;
		var precision = game.opts.forceHighPrecision ? 3 : 2;
		var Sloar = this.game.getLimitedDR(uncappedBonus, 10 + this.game.getEffect("solarRevolutionLimit") + (this.game.challenges.getChallenge("atheism").researched ? (this.game.religion.transcendenceTier) : 0)) * (1 + this.game.getLimitedDR(this.game.getEffect("faithSolarRevolutionBoost"), 4)) * 100;
		return this.game.getDisplayValueExt(Sloar) + "%";
	},

	getlowestRatio: function() {
		var tier = this.game.religion.transcendenceTier + 1;
		var tt = this.game.religion._getTranscendTotalPrice(tier) - game.religion._getTranscendTotalPrice(tier - 1);
		return tt;
	},

	getRecNextTranscendTierProgress: function() {
		if (this.game.religion.transcendenceTier >= 355) {
			return "∞";
		}
		var tier = this.game.religion.transcendenceTier + 1;
		var tt = this.game.religion._getTranscendTotalPrice(tier) - game.religion._getTranscendTotalPrice(tier - 1);
		var obelisk = this.game.religion.getTU("blackObelisk").val;
		var obeliskRatio = (tier * 5 * obelisk + 1000) / (this.game.religion.transcendenceTier * 5 * obelisk + 1000);
		if (game.getEffect('shatterTCGain') > 0.07) {obeliskRatio = 1;}
		var adoreIncreaceRatio = Math.pow((tier + 1) / tier, 2);
		var needpercent = adoreIncreaceRatio * obeliskRatio;
		var x = tt;
		var k = needpercent;
		var epiphanyRecommend = x - 0.0125 + 0.0125 * (Math.pow(((Math.sqrt((80 * k * x + 361 * k - 361 + 80 * x) / (k - 1)) - 19 * k) / (k + 1)), 2));
		if (game.religion.faith * 2.02 * this.game.religion.transcendenceTier + 3.03 * game.religion.faith >= 1e6 * tt && this.game.religion.faithRatio > tt) {
			return tt;
		} else {
			return Math.max(epiphanyRecommend, tt);
		}
	},

	getEpiphany: function() {
		return this.game.religion.faithRatio;
	},

	getBoolean: function() {
		if ( this.game.religion.transcendenceTier >= 354) {
			return this.i18n("best.none");
		}
		if (!game.religion.getRU("transcendence").on) {
			return '亲超越没点';
		}
		var tier = this.game.religion.transcendenceTier + 1;
		var tt = this.game.religion._getTranscendTotalPrice(tier) - game.religion._getTranscendTotalPrice(tier - 1);
		var recommend = "";
		if (this.game.religion.faithRatio < this.getRecNextTranscendTierProgress()) {
			return "否";
		} else {
			recommend = "是";
		}
		if (this.game.religion.faith * 2.02 * (tier - 1) + 3.03 * this.game.religion.faith >= 1e6 * tt && this.game.religion.faithRatio > tt) {
			recommend = "是";
		} else if (this.game.religion.faith < 1e5 && !recommend) {
			recommend = "否（虔诚太少）";
		}
		return recommend;
	},

	// PARAGON :

	getParagonProductionBonus: function() {
		var prodRatio = this.game.prestige.getParagonProductionRatio() * 100;
		return this.game.getDisplayValueExt(prodRatio) + "%";
	},

	getParagonStorageBonus: function() {
		// var storeRatio = 1 + this.game.prestige.getParagonStorageRatio();
		// var singularity = 1 + this.game.getEffect("globalResourceRatio");
		// storeRatio = this.game.getDisplayValueExt(storeRatio * 100 * singularity - 100);
		return this.game.getDisplayValueExt(this.game.prestige.getParagonStorageRatio() * 100) + "%";
	},

	getEffectLeader: function() {
		if (!game.village.leader) {
			return this.i18n("best.none");
		}
		let prices = [{
			"name": "faith",
			"val": 100
		}, {
			"name": "science",
			"val": 100
		}];
		let leader = this.game.village.getEffectLeader(this.game.village.leader.trait.name, prices);
		if (prices[0].val != 100) {
			return "× " + game.getDisplayValueExt(prices[0].val) + "%";
		} else if (prices[1].val != 100) {
			return "* " + game.getDisplayValueExt(prices[1].val) + "%";
		} else {
			return game.getDisplayValueExt(leader * 100) + "%";
		}
	},

	//TIME

	getTCPerSacrifice: function() {
		var tc = this.game.getEffect("tcRefineRatio") + 1;
		var all = Math.floor(game.resPool.resourceMap['alicorn'].value / 25) * tc;
		var numTCPerSacrifice =  game.getDisplayValueExt(tc) + '  ( '  + game.getDisplayValueExt(all) + ')';
		return numTCPerSacrifice;
	},

	getRelicPerTCRefine: function() {
		var number = 1 + this.game.getEffect("relicRefineRatio") * this.game.religion.getZU("blackPyramid").getEffectiveValue(this.game);
		return  game.getDisplayValueExt(number) + '  ('  + game.getDisplayValueExt(Math.floor(game.resPool.resourceMap['timeCrystal'].value / 25) * number) + ')';
	},

	getTradeTC: function() {
		let leaderRatio = 1;
		if (this.game.science.getPolicy("monarchy").researched){
			leaderRatio = 1.95;
		}
		let tradeR = (game.village.traits.some(obj => obj.name === 'merchant')) ? 1 + this.game.prestige.getBurnedParagonRatio() : 0;
		tradeR = 0.03 * tradeR * leaderRatio;
		tradeR += tradeR + this.game.getEffect("tradeRatio") + this.game.diplomacy.calculateTradeBonusFromPolicies("leviathans", this.game);
		var tRatio = 1 + tradeR + this.game.challenges.getChallenge("pacifism").getTradeBonusEffect(this.game);
		var cal = this.game.calendar;
		var ticksPerYear = cal.ticksPerDay * cal.daysPerSeason * cal.seasonsPerYear;
		var leviathansModel = this.game.diplomacy.get("leviathans");
		var rRatio = 1 + 0.02 * leviathansModel.energy;
		for (var i of leviathansModel.sells) {
			if (i.name == "timeCrystal") {
				var leviathansTrade = (i.value * i.chance) / (leviathansModel.buys[0].val);
				break;
			}
		}
		var unobtainium = leviathansTrade * this.game.getResourcePerTick("unobtainium") * rRatio * tRatio;
		var shatter = this.game.getEffect("shatterTCGain") * (1 + this.game.getEffect("rrRatio"));
		var timeCrystalVal = unobtainium * ticksPerYear * shatter;
		return timeCrystalVal;
	},

	getTradeTCAvg: function() {
		if (!game.time.getCFU("ressourceRetrieval").val) {return 0;}
		var CycleFestivalRatio = this.game.calendar.cycleEffectsFestival({
			unobtainium: 1
		})['unobtainium'];
		var CycleEffects = this.game.calendar.cycleEffectsBasics({
			unobtainiumPerTickSpace: 1
		}, "moonOutpost")['unobtainiumPerTickSpace'];
		var calendar = (this.game.prestige.getPerk("numeromancy").researched && this.game.calendar.festivalDays) ? (56.5 + 12 * this.game.getEffect("festivalRatio")) / 50 : 1;
		var tradeVal = calendar * this.getTradeTC() / CycleFestivalRatio / CycleEffects;
		var shatter = this.game.getEffect("shatterTCGain") * (1 + this.game.getEffect("rrRatio"));

		var tcRefineRatio = 0.04 * (1 + this.game.getEffect("tcRefineRatio"));
		var alicornTick = this.game.getResourcePerTick("alicorn") * tcRefineRatio;
		// ticksPerYear = 10 * 100 *4
		var Sacrifice = alicornTick * 4000 * shatter;
		var timeCrystalVal = tradeVal + Sacrifice;
		return timeCrystalVal;
	},
	//getTC

	getResourceRetrievalTCBackYears: function() {
		var shatterRe = 1 + this.game.getLimitedDR(this.game.getEffect("shatterCostReduction"), 1);
		var CycleFestivalRatio = this.game.calendar.cycleEffectsFestival({
			unobtainium: 1
		})['unobtainium'];
		var CycleEffects = this.game.calendar.cycleEffectsBasics({
			unobtainiumPerTickSpace: 1
		}, "moonOutpost")['unobtainiumPerTickSpace'];
		var unobtainiumAvg = this.getTradeTC() / CycleEffects / CycleFestivalRatio;
		var heatfactor = this.game.challenges.getChallenge("1000Years").researched ? 5 : 10;
		var ChronoFurnace = 100 / (100 + heatfactor);
		var timeC = unobtainiumAvg - (ChronoFurnace * shatterRe);
		// (5 × 2.4 [Redmoon] + 5 * 2.4 * game.getEffect("festivalRatio") + 5 × 0.9 [Charon] + 8 × 5 [others]) / 50
		var calendar = (56.5 + 12 * game.getEffect("festivalRatio")) / 50;
		var result = calendar * unobtainiumAvg;
		var cost = this.getButtonPrice("time", 0, "ressourceRetrieval", "timeCrystal");
		var number = this.game.time.getCFU("ressourceRetrieval").val;
		if (!this.game.time.getCFU("ressourceRetrieval").unlocked) {
			return this.i18n("$time.cfu.ressourceRetrieval.label");
		} else if (number == 100) {
			return this.i18n("best.none");
		} else if (timeC <= 0) {
			return "烧水晶收入小于1（支出）";
		} else {
			var TCBack = Math.ceil(cost * number / result);
			var op = game.time.getCFU("blastFurnace").on;
			TCBack = 50 * TCBack / (op + 0.5);
			return this.game.toDisplaySeconds(TCBack);
		}
	},
	// OTHERS

	/*getBestMagnetoBuilding: function() {
		var bestBuilding = ["best.none", "$buildings.magneto.label", "$buildings.steamworks.label"];
		var magneto = this.game.bld.getBuildingExt("magneto").meta;
		var steamworks = this.game.bld.getBuildingExt("steamworks").meta;
		if(!magneto.unlocked || !steamworks.unlocked)
			return this.i18n(bestBuilding[0]);
		var magnetoCount = magneto.val; var steamworksCount = steamworks.val;
		var productionBonus = (1 + (steamworksCount * 0.15)) * (magnetoCount * 2) ;
		var prodBonusMagneto = (1 + (steamworksCount * 0.15)) * ((magnetoCount+1) * 2) ;
		var prodBonusSteam = (1 + ((steamworksCount+1) * 0.15)) * (magnetoCount * 2) ;
		var magnetoValue = (prodBonusMagneto - productionBonus) / 100 ;
		var steamworksValue = (prodBonusSteam - productionBonus) / 100 ;
		if(magnetoValue > steamworksValue)
			return this.i18n(bestBuilding[1]);
		else if (steamworksValue > magnetoValue)
			return this.i18n(bestBuilding[2]);
		return this.i18n(bestBuilding[0]);
	},*/

	getUraniumForThoriumReactors: function() {
		var uraniumTick = -0.001 * (1 - game.getEffect("uraniumRatio")) * this.game.bld.getBuildingExt("reactor").meta.on;
		var thorimTick = game.getEffect("reactorThoriumPerTick") || -0.05;
		var needed = 250 * thorimTick * this.game.bld.getBuildingExt("reactor").meta.on;
		needed /= 1 + this.game.getResCraftRatio("thorium");
		needed += uraniumTick;
		needed *= this.game.getTicksPerSecondUI();
		return game.getDisplayValueExt(needed) + this.i18n("sec");
	},

	getBestRelicBuilding: function() {
		if (!this.game.religion.getZU("blackPyramid").val) {
			return this.i18n("$religion.zu.blackPyramid.label");
		} else if (!this.game.religion.getTU("blackNexus").on) {
			return this.i18n("$religion.tu.blackNexus.label");
		}
		var next;
		let maxSorrow = this.game.getEffect('blsLimit') + 16;
		var cs = Math.floor(Math.log(maxSorrow / 5) / Math.log(1.15)) + 1;
		var cs1 = 0;
		var cs2 = Math.ceil(this.getButtonPrice("religion", 0, "blackPyramid", "sorrow")) - this.game.resPool.get("sorrow").maxValue;
		var nexusPrice = this.getButtonPrice("religion", 2, "blackNexus", "relic");
		var corePrice = this.getButtonPrice("religion", 2, "blackCore", "relic");
		// 总连结需要的遗物数量
		var a = (Math.pow(1.15, cs2) - 1) / 0.15 * corePrice;
		var NexusDB = 0.001 * cs / nexusPrice;
		var core = 0.001 * this.game.religion.getTU("blackNexus").val / a;
		if (cs2 > 0 && NexusDB >= core) {
			while (NexusDB >= core && nexusPrice < Number.MAX_VALUE / 1.15) {
				nexusPrice *= 1.15;
				NexusDB = 0.001 * cs / nexusPrice;
				core += 0.001 / a;
				cs1++;
			}
			next = this.i18n("$religion.tu.blackNexus.label") + " +" + cs1 + "个";
		} else {
			next = this.i18n("$religion.tu.blackCore.label") + " +" + cs2 + "个";
			if (cs2 < 1) {
				next = this.i18n("$religion.zu.blackPyramid.label");
			}
		}
		return next;
	},

	getBestUnobtainiumBuilding: function() {
		if (!game.science.get('nanotechnology').researched) {
			return this.i18n("best.none");
		}
		var elevatorPrices = this.getButtonPrice("space", 1, "spaceElevator", "unobtainium");
		var arrayPrices = this.getButtonPrice("space", 4, "orbitalArray", "eludium");
		var elevatorVal = game.space.getBuilding("spaceElevator").val;
		var arrayVal = game.space.getBuilding("orbitalArray").val;
		var spaceRatio = 1 + this.game.getEffect("spaceRatio");
		var elevatorup = (0.01 + spaceRatio) * arrayPrices * 1000;
		let leaderRatio = 1;
		if (this.game.science.getPolicy("monarchy").researched) {leaderRatio = 1.95;}
		let craftR = (game.village.traits.some(obj => obj.name === 'chemist')) ? 1 + this.game.prestige.getBurnedParagonRatio() : 0;
		craftR = 0.075 * craftR * leaderRatio;
		let factory = (0.02 + spaceRatio)  * (1 + this.game.getEffect("craftRatio") + craftR);
		var arrayup = factory * elevatorPrices ;
		if (elevatorup >= arrayup) {
			if (elevatorPrices > game.resPool.resources[9].maxValue) {
				return '难得素上限了';
			}
			var number = 1;
			while (elevatorup >= arrayup && elevatorPrices < Number.MAX_VALUE / 1.15) {
				elevatorPrices *= 1.15;
				spaceRatio += 0.01;
				arrayup = factory * elevatorPrices;
				elevatorup = (0.01 + spaceRatio) * arrayPrices * 1000;
				number++;
			}
			return $I("space.planet.cath.spaceElevator.label") + " +" + number + "个";
		} else {
			return $I("space.planet.piscine.orbitalArray.label");
		}
	},

	getDarkFutureYears: function() {
		var yearsLeft = this.game.calendar.darkFutureYears(true);
		return yearsLeft < 0 ? this.game.getDisplayValueExt(-yearsLeft) : this.i18n("done");
	},

	getAIlv15Time: function() {
		if (this.game.science.getPolicy("transkittenism").researched) {
			return this.i18n("best.none");
		}
		var lv15Gflops = Math.exp(14.5);
		var gflopsHave = this.game.resPool.get("gflops").value;
		var gflopsproduction = this.game.getEffect("gflopsPerTickBase") - this.game.getEffect("gflopsConsumption");
		if (this.game.bld.get("aiCore").effects["aiLevel"] >= 15) {
			return this.i18n("done");
		}
		if (gflopsproduction > 0) {
			return this.game.toDisplaySeconds((lv15Gflops - gflopsHave) / (gflopsproduction * this.game.getTicksPerSecondUI()));
		} else {
			return this.i18n("infinity");
		}
	},

	getFutureSeason: function() {
		var TemporalParadox = this.game.calendar.futureSeasonTemporalParadox;
		if (this.game.bld.get("chronosphere").on == 0) {
			return this.i18n("best.none");
		} else if (TemporalParadox == -1) {
			var time = 1;
		} else {
			var time = TemporalParadox + 1;
		}
		return time;
	},

	getadjustDay: function() {
		if (this.game.science.get("antimatter").researched && (this.game.science.get("blackchain").researched || this.game.resPool.get("blackcoin").value > 0)) {
			var adjustDay = Math.floor(Math.log(1100 / game.calendar.cryptoPrice) / Math.log(1.0000012495));
			if (adjustDay > 2) {
				return this.game.toDisplaySeconds(adjustDay * 2);
			} else {
				return this.i18n("best.none");
			}
		} else {
			return this.i18n("best.none");
		}
	},

	//==============================================================================================================================================
	//Finally done with calculation functions, now to get down to adding it to the stats tab
	//==============================================================================================================================================

	stats: {
		catnip: [{
				name: "getCatnipInWarmSpring",
				// title: "During Warm Spring",
				val: 0,
			},
			{
				name: "getCatnipColdWinter",
				title: "大于 0 才不会饿死喵喵呢",
				val: 0,
			}
		],
		science: [{
				name: "getCelestialPerDay",
				// title: "Chance of Celestial Events",
				val: 0,
			},
			{
				name: "getCelestialAutoSuccess",
				// title: "Celestial Event Auto Success Rate",
				val: 0,
			},
			{
				name: "getMaxComped",
				// title: "Maximum Helpful Compediums",
				val: 0,
			},
			{
				name: "getBlueprintCraft",
				// title: "Blueprints Per Craft",
				val: 0,
			}
		],
		titanium: [{
				name: "getTitPerZebraTrade",
				title: "与贸易船有关哦🚢",
				val: 0,
			},
			{
				name: "getZebraTradesLeftToMaxTit",
				// title: "Trades Left to Cap Titanium",
				val: 0,
			},
			//{
			//    name: "getZebraTradesToMaxTit",
			//    // title: "Max Zebra Trades to Cap Titanium",
			//    val: 0,
			//},
		],
		pollution: [{
				name: "getPollutionTick",
				// title: "Production Bonus",
				val: 0,
			},
			{
				name: "getCoMax",
				// title: "Storage Bonus",
				val: 0,
			},
		],
		unicorns: [{
				name: "getBestUniBuilding",
				// title: "Best Unicorn Building",
				val: 0,
			},
			//{
			//    name: "getBestAliBuilding",
			//    // title: "Best Alicorn Building Per Ivory Cost",
			//    val: 0,
			//},
			{
				name: "getNecrocornsPerSecond",
				// title: "Necrocorns Per Second",
				val: 0,
			},
			//{
			//    name: "getNecrocornTime",
			//    // title: "Time Until Next Necrocorn",
			//    val: 0,
			//},
			{
				name: "getLeviChance",
				// title: "Chance per year of Leviathans",
				val: 0,
			},
		],
		religion: [{
				name: "getReligionProductionBonusCap",
				// title: "Solar Revolution Limit",
				val: 0,
			},
			{
				name: "getEpiphany",
				val: 0,
			},
			{
				name: "getAfterAdoreEpiphany",
				val: 0,
			},
			{
				name: "getAdoreSloar",
				title: "供珂学家赞美群星触发条件参考",
				val: 0,
			},
		],
		Transcend: [{
				name: "getlowestRatio",
				// title: "Solar Revolution Limit",
				val: 0,
			},
			{
				name: "getRecNextTranscendTierProgress",
				title: "有这么多顿悟再次元超越是最效率的喵~",
				val: 0,
			},
			{
				name: "getBoolean",
				// title: "Apocrypha Progress",
				val: 0,
			},
		],
		paragon: [{
				name: "getParagonProductionBonus",
				// title: "Production Bonus",
				val: 0,
			},
			{
				name: "getParagonStorageBonus",
				// title: "Storage Bonus",
				val: 0,
			},
			{
				name: "getEffectLeader",
				// title: "Effect Leader",
				val: 0,
			},
		],
		time: [{
				name: "getTCPerSacrifice",
				// title: "Time Crystals per Sacrifice",
				val: 0,
			},
			{
				name: "getRelicPerTCRefine",
				// title: "Relics Per Time Crystal Refine",
				val: 0,
			},
		],
		resourceRetrieval: [{
				name: "getTradeTC",
				title: "计算资源回复下每烧1年，当前周期难得素通过贸易利维的时间水晶期望收入",
				val: 0,
			},
			{
				name: "getTradeTCAvg",
				title: "计算资源回复下每烧1年，平均周期下难得素通过贸易利维坦和天角兽的时间水晶期望收入",
				val: 0,
			},
			{
				name: "getResourceRetrievalTCBackYears",
				title: "资源回复的回本时间，仅供参考",
				val: 0,
			},
		],
		others: [
			/*{
				name: "getBestMagnetoBuilding",
				// title: "Best Magneto/Steamwork Building",
				val: 0,
			},*/
			{
				name: "getUraniumForThoriumReactors",
				// title: "Uranium/Sec for Thorium Reactors",
				val: 0,
			},
			{
				name: "getDarkFutureYears",
				// title: "Years untile Dark Future",
				val: 0,
			},
			{
				name: "getBestRelicBuilding",
				//title: "Besting building for increase relic",
				val: 0,
			},
			{
				name: "getBestUnobtainiumBuilding",
				//title: "Besting space building for increase Unobtainium",
				val: 0,
			},
			{
				name: "getAIlv15Time",
				title: "小心机器人",
				val: 0,
			},
			{
				name: "getFutureSeason",
				title: "非酋程度",
				val: 0,
			},
			{
				name: "getadjustDay",
				val: 0,
			}
		]
	},

	statDefinitions: [{
			name: "catnip",
			// title: "Catnip / Sec"
		},
		{
			name: "science",
			// title: "Science"
		},
		{
			name: "titanium",
			// title: "Titanium"
		},
		{
			name: "pollution",
			// title: "Pollution"
		},
		{
			name: "unicorns",
			// title: "Unicorns""
		},
		{
			name: "religion",
			// title: "Religion"
		},
		{
			name: "Transcend",
			// title: "Transcend"
		},
		{
			name: "paragon",
			// title: "Paragon Bonus"
		},
		{
			name: "time",
			// title: "Time"
		},
		{
			name: "resourceRetrieval",
			// title: "resourceRetrieval"
		},
		{
			name: "others",
			// title: "Others"
		}
	],

	statGroups: null,

	constructor: function(game, i18ng, lang) {
		this.game = game;
		this.i18ng = i18ng;
		this.statGroups = [];
		var self = this;
		if (lang && this.i18nData[lang]) {
			this.lang = lang;
		} else {
			this.lang = "en";
		}

		this.statDefinitions.forEach(
			function(statDefinition) {
				self.statGroups.push({
					group: self.stats[statDefinition.name],
					title: self.i18n(statDefinition.name)
				});
			}
		);

		for (var i in this.statGroups) {
			for (var j in this.statGroups[i].group) {
				this.statGroups[i].group[j].calculate = this[this.statGroups[i].group[j].name];
			}
		}
	},

	getStat: function(name) {
		return this[name]();
	},

	save: function(saveData) {},

	load: function(saveData) {},

	resetState: function() {}
});

dojo.declare("classes.tab.NummonTab", com.nuclearunicorn.game.ui.tab, {

	container: null,

	constructor: function(tabName) {},

	render: function(content) {
		this.container = content;
		game.religionTab.render();
		this.update();
	},
	// onClickName: function(e){
    //         console.log(e)
    // },

	update: function() {
		dojo.empty(this.container);

		for (var idx in this.game.nummon.statGroups) {
			var statGroup = this.game.nummon.statGroups[idx];
			dojo.create("h1", {
				innerHTML: statGroup.title,
				// onclick: this.onClickName,
			}, this.container);

			var stats = statGroup.group;
			var table = dojo.create("table", {
				class: 'statTable',
			}, this.container);

			for (var i in stats) {
				var stat = stats[i];
				var val = stat.val;
				if (val == Infinity) {
					val = "Infinity";
				}

				stat.val = this.game.nummon[stat.name]();

				var tr = dojo.create("tr", null, table);
				dojo.create("td", {
					innerHTML: this.game.nummon.i18n(stat.name),
					title: (stat.title) ? stat.title : '',
				}, tr);
				dojo.create("td", {
					innerHTML: typeof val == "number" ? this.game.getDisplayValueExt(val) : val
				}, tr);
			}
		}
	}
});

var NummonInit = function() {
	var i18ng = $I;
	var lang = localStorage["com.nuclearunicorn.kittengame.language"];
	var managers = [{
		id: "nummon",
		class: "NummonStatsManager"
	}];
	for (var i in managers) {
		var manager = managers[i];
		if (gamePage[manager.id] == undefined) {
			gamePage[manager.id] = new window["classes"]["managers"][manager.class](gamePage, i18ng, lang);
			gamePage.managers.push(gamePage[manager.id]);
		} else {
			gamePage[manager.id] = new window["classes"]["managers"][manager.class](gamePage, i18ng, lang);
		}
	}

	gamePage.nummonTab = new classes.tab.NummonTab({
		name: "Nummon",
		id: "Nummon"
	}, gamePage);
	gamePage.nummonTab.visible = true;
	var tabExists = false;
	for (let i in gamePage.tabs) {
		if (gamePage.tabs[i].tabId == "Nummon") {
			tabExists = true;
		}
	}
	if (!tabExists) {
		gamePage.addTab(gamePage.nummonTab);
	}

	if (localStorage["com.nuclearunicorn.kittengame.language"] == "zh") {
		gamePage.nummonTab.tabName = "概览";
	}
	gamePage.render(true);

	gamePage.getTab = function(name) {
		switch (name) {
			case "science":
				return this.libraryTab;
			case "village":
				return this.villageTab;
			case "workshop":
				return this.workshopTab;
			case "space":
				return this.spaceTab;
			case "stats":
				return this.statsTab;
			case "nummon":
				return this.nummonTab;
			case "time":
				return this.timeTab;
			case "challenges":
				return this.challengesTab;
		}
	};
};

var NummonTryInit = function() {
	if (typeof gamePage === "undefined") {
		setTimeout(function() {
			NummonTryInit();
		}, 2000);
	} else {
		NummonInit();
	}
};

/* var box = function() {
	if (this.game.resPool.get("elderBox").value == 0 && this.gamePage.resPool.get("wrappingPaper").value == 0) {
		let time = new Date().getTime();
		let time1 = new Date(2022, 0, 26).getTime();
		let time2 = new Date(2022, 1, 7).getTime();
		if (time >= time1 && time < time2) {
			$.ajax({
				cache: false,
				type: "GET",
				dataType: "JSON",
				crossDomain: true,
				url: "https://worldtimeapi.org/api/ip/"
			}).done(function(resp) {
				if (resp) {
					var day = resp.day_of_year;
					if (day >= 26 && day <= 38) {
						game.resPool.get("elderBox").value++;
						game.msg("新年快乐，Cheney送了你一份礼物盒", "important");
						if (!game.karmaKittens) {
							game.karmaKittens += 5;
							game.msg("新年快乐，Cheney送了你一份业", "important");
						}
					}
				}
			});
		}
	}
};

var spring = function() {
	var haveMsg;
	var springFestival = new Date(2022, 1, 1).getTime();
	var now = new Date().getTime();
	var totalTime = springFestival + 600000 - now;
	if (totalTime > -600000) {
		var e = setInterval(function() {
			let now = new Date().getTime();
			let springFestival = new Date(2022, 1, 1).getTime();
			let totalTime = springFestival - now;
			if (totalTime > 0) {
				now = new Date().getTime();
				totalTime = springFestival - now;
			} else if (totalTime > -600000 && totalTime <= 0) {
				if (!haveMsg) {
					game.msg("Cheney祝你新年快乐", "important");
					haveMsg = true;
					clearInterval(e);
				}
			}
		}, 1000);
	}
};

var dailySign = function() {
	var a = localStorage['sign'] || 0;
	var currentYear = new Date().getFullYear().toString();
	var hasTimestamp = new Date() - new Date(currentYear);
	var hasDays = Math.ceil(hasTimestamp / 86400000);
	if (hasDays > a && hasDays <= 38 && a <= 38) {
		$.ajax({
			cache: false,
			type: "GET",
			dataType: "JSON",
			crossDomain: true,
			url: "https://worldtimeapi.org/api/ip/"
		}).done(function(resp) {
			if (resp) {
				var day = resp.day_of_year;
				var b = Math.floor(Math.random() * 3);
				if (b === 0) {
					var shipValue = game.resPool.get("ship").value;
					if (!shipValue) {
						return;
					}
					do {
						b++;
					}
					while (Math.floor(Math.random() * 2))
					var c = Math.max(game.resPool.get("ship").value * 0.01, 1);
					game.resPool.addResEvent("ship", b);
					game.msg("除旧迎新，Cheney送上" + game.getDisplayValueExt(b * c) + " 个贸易船", "important");
				} else if (b === 1) {
					var shipValue = game.resPool.get("starchart").value;
					if (!shipValue) {
						return;
					}
					do {
						b++;
					}
					while (Math.floor(Math.random() * 2))
					var c = Math.max(game.resPool.get("starchart").value * 0.01, 1);
					game.resPool.addResEvent("starchart", b);
					game.msg("除旧迎新，Cheney送上" + game.getDisplayValueExt(b * c) + " 星图", "important");
				} else if (b === 2) {
					var shipValue = game.resPool.get("unobtainium").value;
					if (!shipValue) {
						return;
					}
					do {
						b++;
					}
					while (Math.floor(Math.random() * 2))
					var c = Math.max(game.resPool.get("unobtainium").perTickCached, 1);
					game.resPool.addResEvent("unobtainium", b * c);
					game.msg("除旧迎新，Cheney送上" + game.getDisplayValueExt(b * c) + " 难得素", "important");
				}
				localStorage['sign'] = resp.day_of_year;
			}
		});
	}
};*/

NummonTryInit();
//box();
//spring();
//dailySign();
