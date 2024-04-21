module.exports = {
    client: {
        guildID: "", //Discord sunucunuza ait ID'nizi buraya yazmalısınız.
        mongoDB: "", //Bot verilerinin depolanacağı mongoDB adresini buraya yazmalısınız.
        token: "" //Discord developer portal üzerinden aldığınız bot tokeni buraya yazmalısınız.
    },
    presence: {
        status: "idle", //Botunuzun oynuyor durumunu bu alandan belirleyebilirsiniz. online - dnd - idle
        presence: true, //Botunuzun oynuyor mesajı olup olmayacağını ayarlayın. true/false
        changing: true, //Oynuyor mesajının belirli aralıklarda değişmesini istiyorsanız true olarak ayarlayın.
        activities : [
            //Botunuzun oynuyorunda bulunacak mesajları buradan ayarlayabilirsiniz.
            //-totalTicketCount- yazarak toplam destek taleplerini,
            //-activeTicketCount- yazarak aktif destek taleplerini,
            //-closedTicketCount- yazarak kapanan destek taleplerini görüntüleyebilirsiniz.
            "www.requlogia.com.tr",
            "-activeTicketCount- aktif talep",
            "Plugin Paketi Hizmetleri",
            "Discord Bot Hizmetleri",
            "Tasarım Hizmetleri"
            //...
        ],
        interval: 60 //Oynuyor mesajının ne kadar sürede değişeceğini belirtir. (Saniye cinsinden yazmalısınız.)
    },
    support: {
        type: 0, //Destek talebi oluşturma embedı butonlu olsun istiyorsanız 0, açılır menü olsun istiyorsanız 1 olarak ayarlayın. 
        workingHoursSystem: true, //Çalışma saatleri sistemini aktif etmek istiyorsanız true olarak ayarlayın.
        archiveSystem: true, //Arşiv sistemini aktif etmek istiyorsanız true olarak ayarlayın.
        ticketPointsSystem: true, //Talep puanlama sistemini aktif etmek için true olarak ayarlayın.
        muteUserWhenMentionedStaff: true, //Yetkili etiketlendiğinde otomatik mute sistemini aktif etmek istiyorsan true olarak ayarla.
        showWorkingHoursInMainEmbed: true, //Çalışma saatlerini göstermek istiyorsanız true olarak ayarlayın.
        saveTranscript: true, //Destek talebinin çıktısını html olarak kaydetmek istiyoranız true olarak ayarlayın. (Dikkat! Bu ayarı aktif ederseniz bot dosyalarının boyutu çok fazla artabilir!) 
        showModalBeforeOpeningTicket: true, //Destek talebi oluşturulurken modal ile soru sordurmak istiyorsanız true olarak ayarlayın.
        showModalQuestionsInTicketEmbed: true, //Destek talebi oluşturulurken modal ile sorduğunuz soruların talep embedinde görünmesini istiyorsanız true olarak ayarlayın.
        sendMessageToStaffsWhenTicketCreated: true, //Bir destek talebi oluşturulduğunda yetkililere özelden bilgilendirme gitmesini istiyorsanz true olarak ayarlayın.
        warnAndMuteOnMemberMentionsStaffInTicketChannel: true, //Yetkili etiketlendiğinde etiketleyen kişinin uyarı almasını istiyorsan true olarak ayarlayın.
        deleteMentionMessage: true, //Destek talebi açıldığında gönderilen bildirim mesajı silinmeliyse true olarak ayarlayın.
        warnCount: 2, //Uyarı sayısını belirleyin.
        removeMentionWarnAfter: 0.5, //Bildirim mesajının ne kadar süre sonra silinmesi gerektiğini ayarlayın. (Saniye cinsinden belirlemelisiniz.)
        muteTimeout: 1, //Yetkili etiketlendiğinde kaç dakika susturulacağını ayarlarsınız. (Dakika cinsinden belirtmelisiniz.)
        //Eğer talep açmayı limitlendirmek istemiyorsanız bu ayarı '0' olarak ayarlayın. 
        //Bir kullanıcının sadece 1 talep oluşturmasını istiyorsanız bu ayarı '1' olarak ayarlayın. 
        //Bir kullanıcının her kategoriden 1 talep oluşturmasını istiyorsanız bu ayarı '2' olarak ayarlayın.
        oneTicketType: 0,
        showStaffsInTicketEmbed: true, //Destek başlatıldığında gönderilecek embedde yetkililerin gözükmesini istiyorsanız bu ayarı true olarak ayarlayın.
        ticketLogs: true, //Destek taleplerinin kaydının tutulmasını istiyorsanız bu ayarı true olarak ayarlayın. (Discord üzerinde bir kanalda log tutar.)
        onlyStaffsCanCloseTickets: false, //Destek talebini sadece yetkililerin sonlandırmasını istiyorsanız bu ayarı true olarak ayarlayın.
        onlyStaffsCanAddMemberToTicket: true, //Desteğe sadece yetkililerin kullanıcı eklemesini istiyorsanız bu ayarı true olarak ayarlayın.
        askForWhereDidYouHearUs: true, //Kullanıcıların ilk taleplerinde "Bizi nereden duydunuz?" sorusunun sorulmasını istiyorsanız true olarak ayarlayın.
        staffStarsSystem: true, //Destek sonunda yetkililerin puanlanmasını istiyorsanız bu ayarı true olarak ayarlayın.
        //Destek talebi oluşturulduğunda kimsenin etiketlenmesini istemiyorsanız 'false' yazmalısınız. 
        //Eğer destek ekibi rolünü etiketlemek istiyorsanız 'rol' yazmalısınız. 
        //Eğer desteği başlatan kullanıcıyı etiketlemek istiyorsanız 'user' yazmalısınız. 
        //Eğer @everyone göndermek istiyorsanız 'everyone' yazmalısınız.
        mentionRolesWhenTicketCreated: ["everyone"], 
        ticketPointsLogChnID: "", //Destek puanlarının gözükeceği log kanalının ID'sini buraya yazmalısınız.
        ticketLogChannelID: "", //Destek loglarının gözükeceği log kanalının ID'sini buraya yazmalısınız.
        ticketCategoryID: "", //Desteğin başlatılacağı kategorinin ID'sini buraya yazmalısınız.
        ticketArchiveCategoryID: "", //Destek kapatıldıktan sonra kanalın gizleneceği kategorinin ID'sini buraya yazmalısınız.
        staffRoles: [""], //Yetkili rolünün ID'sini buraya yazmalısınız.
        categories: [
            /*Aşağıdaki bölümden destek kategorilerini ayarlayabilirsiniz.*/
            {
                label: "Satış Öncesi Destek", //Kategori adını buradan ayarlamalısınız.
                id: "pst",
                emoji: "⏰", //Kategori emojiini buradan ayarlamalısınız.
                topic: "Satış öncesi destek talebiniz oluşturuldu. Talep sırasına göre dönüş sağlıyoruz lütfen sabırla bekleyin.", //Bu kategoride talep açıldığında kanal açıklamasına yazılacak metni buradan ayarlamalısınız.
                description: "Satın alım öncesi bilgi alabilirsiniz.", //Kategorinin açıklamasını buradan ayarlamalısınız.
                channelName: "ps-ticket", //Bu kategoride açılan taleplerin kanal ismini buradan ayarlayabilirsin.
                btnType: 2
            },
            {
                label: "Teknik Destek",
                id: "tst",
                emoji: "🔧",
                topic: "Teknik destek talebiniz oluşturuldu. Talep sırasına göre dönüş sağlıyoruz lütfen sabırla bekleyin.",
                description: "Ürünler hakkında buradan destek alabilirsin.",
                channelName: "ts-ticket",
                btnType: 2
            },
            {
                label: "Diğer",
                id: "ot",
                emoji: "💎",
                topic: "Destek talebiniz oluşturuldu. Talep sırasına göre dönüş sağlıyoruz lütfen sabırla bekleyin.",
                description: "Diğer konular hakkında destek alabilirsiniz",
                channelName: "o-ticket",
                btnType: 2
            },
            //...
        ],
        modalQuestions: [
            {
                label: "Destek almak istediğiniz konu?", //Soru başlığı
                placeholder: "Satın aldığım ürünü kurarken sorun yaşıyorum.", //Soru placeholder'ı
                maxLength: 100, //Max karakter sayısı
                minLength: 2, //Minimum karakter sayısı
                required: true, //Bu sorunun zorunlu olmasını istiyorsanız true olarak ayarlayın.
                style: 1 //Kısa cevap kutusu olmasını istiyorsanız '1' uzun cevap kutusu olmasını istiyorsanız '2' olarak ayarlayın
            },
            {
                label: "Yaşadığınız sorun hakkında detay verin.",
                placeholder: "Kurulum sırasında hata ile karşılaşıyorum. Hatayı destek üzerinden göndereceğim.",
                maxLength: 500,
                minLength: 2,
                required: false,
                style: 2
            }
            //...
        ],
        workingHours: {
            /* Çalışma saatlerinizi bu alandan ayarlayabilirsiniz. 00-24 formatında ayarlamalısınız. */
            Monday: "12-22",
            Tuesday: "12-22",
            Wednesday: "12-22",
            Thursday: "12-22",
            Friday: "12-22",
            Saturday: "15-24",
            Sunday: "0-0"
        },
        staffStatusEmojis: {
            /* Destek embedinde gözükecek yetkililerin durumlarını gösterir. */
            online: "🟢",
            idle: "🟡",
            offline: "⚫",
            dnd: "🔴"
        },
        staffStarsModal: {
            /* Destek sonrasında yetkililere yapılacak geri dönüş için soruları buadan oluşturabilirsiniz. */
            title: "Yetkili Değerlendirme", // Modal başlığını buradan ayarlayabilirsiniz.
            question: {
                label: "Soru", //Soru başlığını buradan ayarlamalısınız.
                placeholder: "Destek aldığınız hizmeti değerlendirin.", //Soru placeholder'ını buradan ayarlamalısınız.
                maxLength: 100, //Max karakter sayısı
                minLength: 2, //Minimum karakter sayısı
                required: true, //Bu sorunun zorunlu olmasını istiyorsanız true olarak ayarlayın.
                style: 2 //Kısa cevap kutusu olmasını istiyorsanız '1' uzun cevap kutusu olmasını istiyorsanız '2' olarak ayarlayın
            },
            //...
        }
    },
    supportCommands: {
        /* 
        
        Bota özel oluşturabileceğiniz özel komutları bu alandan ayarlayabilirsiniz. 
        
        Resimleri https://imgur.com/upload üzerinden yükleyebilirsiniz.
        
        */
        prefix: "!", //., !, ?, ...
        cmds: [
            {
                name: "komut1", //Komut ismini buradan belirlemelisiniz.
                description: "Örnek komut açıklaması", //Komutun açıklamasını buradan ayarlayabilirsin.
                reply: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", //Komut kullanıldığında gönderilecek mesajı buradan ayarlayabilirsin.
                embed: true, //Mesajı embed olarak atmak istiyorsanız bu ayarı true olarak ayarla.
                onlyOnTickets: true, //Bu komut sadece destek taleplerinde kullanılmalıysa true olarak ayarla.
                deleteUserMessageAfterResponse: false //Komut kullanıldıktan sonra mesajın silinmesini istiyorsan true olarak ayarla.
            },
            {
                name: "komut2",
                description: "Örnek komut açıklaması",
                reply: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                embed: false,
                onlyOnTickets: false,
                deleteUserMessageAfterResponse: true
            },
            //...
        ]
    },
    messages: {
        /* Aşağıdaki bölümden botda bulunan tüm mesajları düzenleyebilirsiniz. */
        general: {
            err: {
                unknownCommand: "Geçersiz bir komut kullanıyorsun!",
                staffOnly: "Bu komutu sadece yetkililer kullanabilir.",
                ticketOnly: "Bu komutu sadece talep kanallarında kullanabilirsin.",
                setupErr: "Lütfen destek başlatma embedinizi `/setup` komutunu kullanarak güncelleyin."
            }
        },
        commands: {
            add: {
                desc: "-added_user- adlı kullanıcı -user- tarafından talebe eklendi.",
                color: 0xa21b3a
            },
            blacklist: {
                add: {
                    desc: "-user- adlı kullanıcı karalisteye eklendi.",
                    color: 0xa21b3a
                },
                remove: {
                    desc: "-user- adlı kullanıcı karalisteden çıkartıldı.",
                    color: 0xa21b3a
                },
                list: {
                    userNotFound: "Karalistede hiç bir kullanıcı bulunamadı.",
                    author: "KARA LISTE"
                }
            },
            close: {
                cancelbtn: {
                    label: "Iptal Et",
                    emoji: "❌"
                },
                closingEmbed: {
                    desc: "Talep -timeout- kapatılıyor...",
                    color: 0xa21b3a
                },
                closeLogNoPoints: {
                    author: "TALEP KAPATILDI!",
                    desc: "Talep: -chn_name- \n\nPuan alan yetkili yok.",
                    color: 0xa21b3a
                },
                closeLogPoints: {
                    author: "TALEP KAPATILDI!",
                    color: 0xa21b3a
                }
            },
            remove: {
                err: {
                    ticketHolderRemoved: "Talep sahibini talepten çıkartamazsın.",
                    userNotFound: "Bu kullanıcı talebe eklenmemiş."
                },
                embed: {
                    desc: "-removed_user- adlı kullanıcı -user- tarafından talepten çıkarıldı.",
                    color: 0xa21b3a
                }
            },
            setup: {
                minCategory: "Bu komutu çalıştırmak için en az 1 kategoriye ihtiyacınız var. `Config.js` dosyasını doğru yapılandırdığınıza emin olun!",
                maxCategory: "En fazla 25 kategori belirleyebilirsiniz. `Config.js` dosyasını doğru yapılandırdığınıza emin olun!",
                inivalidType: "Geçersiz bir type belirttiniz. `Config.js` dosyasını doğru yapılandırdığınıza emin olun!",
                workinghours: "Çalışma Saatleri:",
                placeholder: "Lütfen bir kategori seçin.",
                embed: {
                    author: "REQULOGIA DESTEK TALEBI",
                    desc: "`Desteğe ihtiyacınız varsa, aşağıdaki kısımdan`\n`kategori seçerek talep oluşturabilirsiniz.` \n\n**📫 Talep Detayları:**\nDestek taleplerine sırasıyla, çalışma saatlerine\nve müsaitlik durumuna göre cevap verilmektedir.\nEtiketlemede bulunmanız uyarı ve ardından\nsusturma almanıza sebep olacaktır.\n\n**📕 Ürün Detayları:**\nÜrünlerimiz hakkındaki tüm güncel bilgiler\nhttps://wiki.requlogia.com.tr/ üzerinde\nyer almaktadır.",
                    thumbnail: "https://i.imgur.com/skoAuNG.png",
                    footer: "Requlogia | Copyright ©️ 2023 Tüm Hakları Saklıdır.",
                    color: 0xa21b3a
                }
            },
            staffinfo: {
                err: {
                    notStaff: "Bilgilerini sorgulamak istediğiniz kullanıcı bir destek yetkilisi değil!",
                },
                embed: {
                    author: "YETKILI BILGI PANELI",
                    thumbnail: "https://i.imgur.com/skoAuNG.png",
                    fields: {
                        field1: {
                            name: "**Ortalama Puan**",
                            inline: true //Mesajların alt alta durmasını istiyorsanız bu ayarı false olarak düzenleyin.
                        },
                        field2: {
                            name: "**Toplam Geri Dönüş**",
                            inline: true
                        }
                        //Daha fazla fields mesajı ekleyemezsiniz.
                    },
                    footer: "Requlogia | Copyright ©️ 2023 Tüm Hakları Saklıdır."
                }
            },
            staffstats: {
                err: "Bu sunucuda destek yetkilisi bulunmamakta.",
                embed: {
                    author: "YETKILI SIRALAMASI - ",
                    color: 0xa21b3a,
                    footer: "Requlogia | Copyright ©️ 2023 Tüm Hakları Saklıdır."
                }
            },
            userinfo: {
                embed: {
                    author: "KULLANICI BILGI PANELI",
                    thumbnail: "https://i.imgur.com/skoAuNG.png",
                    fields: {
                        field1: {
                            name: "**Açtığı Toplam Talep**",
                            inline: true //Mesajların alt alta durmasını istiyorsanız bu ayarı false olarak düzenleyin.
                        },
                        field2: {
                            name: "**Yaptığı Toplam Geri Dönüş**",
                            inline: true
                        },
                        field3: {
                            name: "**Kara listede mi?**",
                            inline: false
                        }
                        //Daha fazla fields mesajı ekleyemezsiniz.
                    },
                    footer: "Requlogia | Copyright ©️ 2023 Tüm Hakları Saklıdır"
                }
            }
        },
        tickets: {
            general: {
                modalTitle: "REQULOGIA - Destek Sistemi",
                createTicket: "Yeni bir destek talebi oluşturuldu → -channel-",
                staffClosed: "Sadece yetkililer desteği sonlandırabilir.",
                closeCancelDesc: "Işlem -user- tarafından iptal edildi.",
                deletingDesc: "Destek talebi siliniyor...",
                reopenDesc: "Destek talebi yeniden açılıyor...",
                reopenedDesc: "Talep -user- tarafından yeniden açıldı.",
                closeCancelBtn: {
                    label: "Iptal",
                    emoji: "📌"
                },
                closingEmbed: {
                    color: 0xa21b3a,
                    desc: "Talep Kapatılıyor -timeout-"
                },
                closedEmbed: {
                    color: 0xa21b3a,
                    desc: "Talep -user- tarafından kapatıldı.",
                    reopenbtn: {
                        label: "Geri Aç",
                        emoji: "🔄"
                    },
                    deletebtn: {
                        label: "Sil",
                        emoji: "🗑️"
                    }
                }
            },
            ticketEmbed: {
                author: "REQULOGIA TEKNIK DESTEK TALEBI",
                desc: "Talebiniz başarıyla oluşturuldu. Yetkililerimiz kısa\nsürede dönüş yapacaktır. Talebi kapatmak için\n`Kapat` butonuna tıklayınız ya da `/kapat` yazınız.",
                color: 0xa21b3a,
                fields: {
                    field: {
                        name: "**Yetkililer:**"
                    }
                    //Daha fazla fields mesajı ekleyemezsiniz.
                },
                closeBtn: {
                    label: "Kapat",
                    emoji: "❌"
                }
            },
            ticketLogs: {
                ticketCreate: {
                    author: "BIR TALEP OLUSTURULDU!",
                    fields: {
                        field1: {
                            name: "Talep Sahibi",
                            inline: true //Mesajların alt alta durmasını istiyorsanız bu ayarı false olarak düzenleyin.
                        },
                        field2: {
                            name: "Kanal",
                            inline: true
                        },
                        field3: {
                            name: "Talep Türü",
                            inline: true
                        }
                        //Daha fazla fields mesajı ekleyemezsiniz.
                    }
                },
                ticketClosed: {
                    author: "BIR TALEP KAPATILDI!",
                    fields: {
                        field1: {
                            name: "Talep Sahibi",
                            inline: true //Mesajların alt alta durmasını istiyorsanız bu ayarı false olarak düzenleyin.
                        },
                        field2: {
                            name: "Talebi Kapatan",
                            inline: true
                        },
                        field3: {
                            name: "Talep Türü",
                            inline: true
                        }
                        //Daha fazla fields mesajı ekleyemezsiniz.
                    }

                }
            },
            workingHoursEmbed: {
                color: 0xa21b3a,
                author: "ŞU AN ÇALIŞMA SAATLERI DIŞINDAYIZ",
                description: "\n\n`-today-` günü için çalışma saatlerimiz\n-hours-. \n\nÇalışma saatleri dışında oluşturulan talepler diğer\niş gününe sarkabilir ya da dönüşlerimiz gecikebilir.\n\n**📫 Talep Detayları:**\nDestek taleplerine sırasıyla, çalışma saatlerine\nve müsaitlik durumuna göre cevap verilmektedir.\nEtiketlemede bulunmanız uyarı ve ardından\nsusturma almanıza sebep olacaktır.\n\n",
                footer: "Requlogia | Copyright ©️ 2023 Tüm Hakları Saklıdır",
                thumbnail: "https://i.imgur.com/skoAuNG.png",
            },
            whereHearUs: {
                general: {
                    modalTitle: "Requlogia - Anket",
                    modalQuestion: "Bizi nereden duydunuz?",
                    replySaved: "Cevabınız kaydedildi. Ankete katıldığınız için teşekkürler.",
                    err: {
                        alreadyRecorded: "Anket cevabınız daha önce kaydedilmiştir."
                    }
                },
                whereHearAboutEmbed: {
                    author: "BIZI NERDEN DUYDUNUZ?",
                    desc: "Aşağıdaki butona tıklayarak ufak bir ankete katılabilirsiniz.",
                    color: 0xa21b3a,
                    hearUsBtn: {
                        label: "Anket",
                        emoji: "⭐"
                    }
                }
            },
            staffStars: {
                staffStarEmbed: {
                    color: 0xa21b3a,
                    author: "TALEBI PUANLAR MISINIZ?",
                    desc: "Aşağıdaki butonlardan birine tıklayarak aldığınız destek sistemini yorumlamak ister misiniz?",
                    footer: "Requlogia | Copyright ©️ 2023 Tüm Hakları Saklıdır",
                    starsBtn: {
                        label: "⭐"
                    }
                }
            },
        },
        mentionWarnMute: {
            warnEmbed: {
                color: 0xa21b3a,
                author: "BIR KULLANICI SUSTURULDU!",
                desc: "-user- destek kanallarında yetkilileri etiketlediği için uyarıldı. (Toplam Uyarı: `-warnCount-`)"
            },
            muteEmbed: {
                color: 0xa21b3a,
                author: "BIR KULLANICI SUSTURULDU!",
                desc: "-user- destek kanallarında yetkilileri etiketlediği için -timeout- dakika susturuldu."
            }
        },
        feedBacks: {
            alreadyFeedBacks: "Bu talep için zaten bir geri dönüş yapmışsın.",
            savedFeedBacks: "Geri dönüşünüz alındı. Bizi değerlendirdiğiniz için teşekkür ederiz."
        }
    },
    defaultemoji: "⭐",
    version: 1.0
}