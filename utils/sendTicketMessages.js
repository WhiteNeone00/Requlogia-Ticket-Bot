function _0x74a6(_0x58783a,_0x138804){var _0x35bce3=_0x35bc();return _0x74a6=function(_0x74a680,_0x214c26){_0x74a680=_0x74a680-0x14d;var _0x507993=_0x35bce3[_0x74a680];return _0x507993;},_0x74a6(_0x58783a,_0x138804);}var _0x323686=_0x74a6;(function(_0x44c818,_0x284ca8){var _0x3e87ad=_0x74a6,_0x4f61c9=_0x44c818();while(!![]){try{var _0x58bf13=-parseInt(_0x3e87ad(0x167))/0x1+parseInt(_0x3e87ad(0x1a8))/0x2+parseInt(_0x3e87ad(0x186))/0x3+-parseInt(_0x3e87ad(0x1a5))/0x4*(-parseInt(_0x3e87ad(0x1a4))/0x5)+parseInt(_0x3e87ad(0x1a2))/0x6*(-parseInt(_0x3e87ad(0x1ac))/0x7)+-parseInt(_0x3e87ad(0x180))/0x8+-parseInt(_0x3e87ad(0x185))/0x9*(-parseInt(_0x3e87ad(0x19e))/0xa);if(_0x58bf13===_0x284ca8)break;else _0x4f61c9['push'](_0x4f61c9['shift']());}catch(_0x14df71){_0x4f61c9['push'](_0x4f61c9['shift']());}}}(_0x35bc,0xcd639));const Discord=require(_0x323686(0x19d)),config=require(_0x323686(0x164)),moment=require('moment');module['exports']=async(_0x433dd7,_0x181bbf)=>{var _0xabd293=_0x323686;const _0xc0995d=await _0x433dd7[_0xabd293(0x1b0)][_0xabd293(0x175)](_0x181bbf['id']);var _0x50fe83='';if(config['support']['showModalBeforeOpeningTicket']&&config[_0xabd293(0x155)][_0xabd293(0x182)])for(let _0x284e06=0x0;_0x284e06<_0xc0995d[_0xabd293(0x154)]['length'];_0x284e06++){_0x50fe83+=_0xabd293(0x1ad)+_0xc0995d[_0xabd293(0x154)][_0x284e06]['question']+_0xabd293(0x19f)+_0xc0995d[_0xabd293(0x154)][_0x284e06][_0xabd293(0x152)]+'`';}var _0x2ddd60=[],_0xbe2527='';for(let _0x3a8ea2=0x0;_0x3a8ea2<config[_0xabd293(0x155)]['staffRoles'][_0xabd293(0x15f)];_0x3a8ea2++){var _0x2ac007=await _0x181bbf[_0xabd293(0x1a0)][_0xabd293(0x192)][_0xabd293(0x1a1)](config[_0xabd293(0x155)][_0xabd293(0x176)][_0x3a8ea2]),_0x2c1d54=_0x2ac007[_0xabd293(0x160)]['map'](_0x38a22c=>_0x38a22c);for(let _0x2b0e6f=0x0;_0x2b0e6f<_0x2c1d54[_0xabd293(0x15f)];_0x2b0e6f++){!_0x2ddd60['some'](_0x5896a1=>_0x5896a1[_0xabd293(0x158)]['id']===_0x2c1d54[_0x2b0e6f][_0xabd293(0x158)]['id'])&&_0x2ddd60[_0xabd293(0x18f)](_0x2c1d54[_0x2b0e6f]);}}for(let _0x1547ee=0x0;_0x1547ee<_0x2ddd60[_0xabd293(0x15f)];_0x1547ee++){_0xbe2527+=(_0x2ddd60[_0x1547ee][_0xabd293(0x181)]?config[_0xabd293(0x155)]['staffStatusEmojis'][_0x2ddd60[_0x1547ee]['presence'][_0xabd293(0x16b)]]:config[_0xabd293(0x155)][_0xabd293(0x156)][_0xabd293(0x17f)])+_0xabd293(0x1a9)+_0x2ddd60[_0x1547ee][_0xabd293(0x158)]['id']+'>\x0a';}var _0x40a624=new Discord[(_0xabd293(0x194))]()[_0xabd293(0x19b)](config[_0xabd293(0x191)][_0xabd293(0x151)][_0xabd293(0x172)][_0xabd293(0x195)])[_0xabd293(0x15e)]({'name':config[_0xabd293(0x191)]['tickets'][_0xabd293(0x172)][_0xabd293(0x1a7)]})['setDescription'](config[_0xabd293(0x191)]['tickets'][_0xabd293(0x172)]['desc']+_0x50fe83)[_0xabd293(0x161)]([{'name':config[_0xabd293(0x191)]['tickets']['ticketEmbed'][_0xabd293(0x18a)]['field'][_0xabd293(0x17c)],'value':_0xbe2527||'!'}])[_0xabd293(0x189)](_0x181bbf['guild']['iconURL']()),_0x3f06f0=new Discord[(_0xabd293(0x19c))]()[_0xabd293(0x15d)](_0xabd293(0x171))['setEmoji'](config[_0xabd293(0x191)]['tickets'][_0xabd293(0x172)][_0xabd293(0x18b)][_0xabd293(0x157)])[_0xabd293(0x187)](Discord[_0xabd293(0x163)]['Secondary'])[_0xabd293(0x1ae)](config[_0xabd293(0x191)][_0xabd293(0x151)][_0xabd293(0x172)][_0xabd293(0x18b)][_0xabd293(0x16a)]),_0xde8f06=new Discord[(_0xabd293(0x173))]()['addComponents']([_0x3f06f0]);_0x181bbf[_0xabd293(0x17e)]({'embeds':[_0x40a624],'components':[_0xde8f06]})['then'](_0x1d2d3f=>_0x1d2d3f['pin']());if(config[_0xabd293(0x155)][_0xabd293(0x15a)]){var _0x106674='';for(let _0x2b7cfa=0x0;_0x2b7cfa<config[_0xabd293(0x155)][_0xabd293(0x15a)]['length'];_0x2b7cfa++){if(config[_0xabd293(0x155)][_0xabd293(0x15a)][_0x2b7cfa]==='everyone'||config[_0xabd293(0x155)][_0xabd293(0x15a)][_0x2b7cfa]===_0xabd293(0x14e))_0x106674+='@everyone\x20';else config[_0xabd293(0x155)]['mentionRolesWhenTicketCreated'][_0x2b7cfa]===_0xabd293(0x158)?_0x106674+='<@'+_0xc0995d[_0xabd293(0x1a7)]+'>\x20':_0x106674+='<@&'+config['support'][_0xabd293(0x15a)][_0x2b7cfa]+'>\x20';}if(_0x106674==='')return;_0x181bbf[_0xabd293(0x17e)](_0x106674)['then'](_0x2fdfdb=>setTimeout(()=>{var _0x366e74=_0xabd293;_0x2fdfdb[_0x366e74(0x16e)]?_0x2fdfdb[_0x366e74(0x16c)]():'';},0x7d0));}var _0x55eaac=moment()['format'](_0xabd293(0x166)),_0x429c7b=moment()[_0xabd293(0x196)]('HH'),_0x5dd081=config[_0xabd293(0x155)][_0xabd293(0x177)][_0x55eaac][_0xabd293(0x150)]('-')[0x0],_0x335e19=config[_0xabd293(0x155)]['workingHours'][_0x55eaac]['split']('-')[0x1];if(_0x429c7b<_0x5dd081||_0x429c7b>(parseInt(_0x335e19)-0x1)[_0xabd293(0x15b)]()){var _0x525033=new Discord[(_0xabd293(0x194))]()['setColor'](config[_0xabd293(0x191)][_0xabd293(0x151)][_0xabd293(0x170)][_0xabd293(0x195)])[_0xabd293(0x15e)]({'name':config[_0xabd293(0x191)][_0xabd293(0x151)]['workingHoursEmbed'][_0xabd293(0x1a7)]})['setDescription'](config['messages'][_0xabd293(0x151)]['workingHoursEmbed'][_0xabd293(0x16f)][_0xabd293(0x168)](_0xabd293(0x198),_0x55eaac[_0xabd293(0x168)](_0xabd293(0x169),_0xabd293(0x18d))[_0xabd293(0x168)](_0xabd293(0x174),'Salı')[_0xabd293(0x168)](_0xabd293(0x159),_0xabd293(0x1aa))[_0xabd293(0x168)](_0xabd293(0x19a),_0xabd293(0x178))[_0xabd293(0x168)](_0xabd293(0x14d),_0xabd293(0x18e))['replace'](_0xabd293(0x197),_0xabd293(0x17a))[_0xabd293(0x168)](_0xabd293(0x1a3),_0xabd293(0x17b)))['replace'](_0xabd293(0x1ab),_0x55eaac===_0xabd293(0x1a3)?_0xabd293(0x162):'`'+_0x5dd081+'.00`\x20ile\x20`'+_0x335e19+_0xabd293(0x179)))[_0xabd293(0x1af)]({'text':config[_0xabd293(0x191)][_0xabd293(0x151)]['workingHoursEmbed'][_0xabd293(0x193)]})[_0xabd293(0x189)](config['messages'][_0xabd293(0x151)][_0xabd293(0x170)][_0xabd293(0x153)]);_0x181bbf[_0xabd293(0x17e)]({'embeds':[_0x525033]});}if(config[_0xabd293(0x155)][_0xabd293(0x16d)]){const _0x5b6e17=await _0x433dd7[_0xabd293(0x1b0)][_0xabd293(0x184)](_0xc0995d[_0xabd293(0x1a7)]);if(!_0x5b6e17[_0xabd293(0x188)]){var _0x129d18=new Discord['EmbedBuilder']()[_0xabd293(0x19b)](config[_0xabd293(0x191)][_0xabd293(0x151)][_0xabd293(0x165)][_0xabd293(0x15c)][_0xabd293(0x195)])[_0xabd293(0x15e)]({'name':config[_0xabd293(0x191)][_0xabd293(0x151)]['whereHearUs']['whereHearAboutEmbed'][_0xabd293(0x1a7)]})[_0xabd293(0x183)](config['messages'][_0xabd293(0x151)][_0xabd293(0x165)][_0xabd293(0x15c)]['desc']),_0x49a870=new Discord[(_0xabd293(0x19c))]()[_0xabd293(0x15d)](_0xabd293(0x190))[_0xabd293(0x1ae)](config[_0xabd293(0x191)][_0xabd293(0x151)]['whereHearUs'][_0xabd293(0x15c)][_0xabd293(0x18c)][_0xabd293(0x16a)])['setEmoji'](config['messages']['tickets'][_0xabd293(0x165)][_0xabd293(0x15c)][_0xabd293(0x18c)][_0xabd293(0x157)])['setStyle'](0x2),_0x2f2307=new Discord[(_0xabd293(0x173))]()[_0xabd293(0x17d)]([_0x49a870]);_0x181bbf[_0xabd293(0x17e)]({'embeds':[_0x129d18],'components':[_0x2f2307]});}}if(config[_0xabd293(0x155)][_0xabd293(0x14f)]){var _0x5ccad3=new Discord['EmbedBuilder']()[_0xabd293(0x183)](config['messages'][_0xabd293(0x151)][_0xabd293(0x1a6)]['createTicket'][_0xabd293(0x168)]('-channel-','<#'+_0x181bbf['id']+'>'));for(let _0xf1a035=0x0;_0xf1a035<_0x2ddd60['length'];_0xf1a035++){_0x2ddd60[_0xf1a035]['user'][_0xabd293(0x17e)]({'embeds':[_0x5ccad3]})[_0xabd293(0x199)](_0x2a7897=>{return;});}}};function _0x35bc(){var _0x3ac7c7=['mentionRolesWhenTicketCreated','toString','whereHearAboutEmbed','setCustomId','setAuthor','length','members','addFields','yoktur','ButtonStyle','../config.js','whereHearUs','dddd','660688txDTwo','replace','Monday','label','status','delete','askForWhereDidYouHearUs','deletable','description','workingHoursEmbed','support_ticketClose','ticketEmbed','ActionRowBuilder','Tuesday','fetchTicket','staffRoles','workingHours','Perşembe','.59`\x20saatleri\x20arasındadır','Cumartesi','Pazar','name','addComponents','send','offline','9009120YjYoph','presence','showModalQuestionsInTicketEmbed','setDescription','fetchUser','3357jGPoAW','3884196KdCvDw','setStyle','hearUsFrom','setThumbnail','fields','closeBtn','hearUsBtn','Pazartesi','Cuma','push','user_hearusfrom','messages','roles','footer','EmbedBuilder','color','format','Saturday','-today-','catch','Thursday','setColor','ButtonBuilder','discord.js','42890SwXWDv','**\x20\x0a\x20`','guild','fetch','852AfNtMb','Sunday','84075fRHEKN','152csmaBK','general','author','340504EeEoKq','\x20<@','Çarşamba','-hours-','53025SykciW','\x0a\x0a**','setLabel','setFooter','Database','Friday','here','sendMessageToStaffsWhenTicketCreated','split','tickets','answer','thumbnail','questions','support','staffStatusEmojis','emoji','user','Wednesday'];_0x35bc=function(){return _0x3ac7c7;};return _0x35bc();}