import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart, ShoppingBag, MessageCircle, Calendar, Music, Briefcase, Users } from 'lucide-react'

const GIRLS = {
  zeynep: {
    name: 'ZEYNEP',
    color: 'zeynep',
    gradient: 'gradient-zeynep',
    bgColor: 'bg-[#00BFFF]',
    textColor: 'text-[#00BFFF]',
    imagePath: '/images/zeynep.jpeg',
    description: 'Main character energy\'nin ta kendisisin! Mavi saçınla herkesi yönetiyorsun, dominant queen! 💙',
    emoji: '👑'
  },
  hilal: {
    name: 'HILAL',
    color: 'hilal',
    gradient: 'gradient-hilal',
    bgColor: 'bg-[#9370DB]',
    textColor: 'text-[#9370DB]',
    imagePath: '/images/hilal.jpg',
    description: 'Grubun kalbi sensin! Dansın, sesin, sanatınla herkesi bir araya getiriyorsun. Purple queen! 💜',
    emoji: '🎭'
  },
  esin: {
    name: 'ESIN',
    color: 'esin',
    gradient: 'gradient-esin',
    bgColor: 'bg-[#FFD700]',
    textColor: 'text-[#FF69B4]',
    imagePath: '/images/esin.jpeg',
    description: 'Golden retriever energy! Hiç durmuyorsun, kaos ama sevimli kaos. Blonde queen! ✨',
    emoji: '⚡'
  },
  sueda: {
    name: 'SUEDA',
    color: 'sueda',
    gradient: 'gradient-sueda',
    bgColor: 'bg-[#800020]',
    textColor: 'text-[#800020]',
    imagePath: '/images/sueda.jpeg',
    description: 'Perfectionist queen! Detaylar senin işin, her şeyi mükemmel yapıyorsun. Career-focused! 💼',
    emoji: '📊'
  },
  lidya: {
    name: 'LIDYA',
    color: 'lidya',
    gradient: 'gradient-lidya',
    bgColor: 'bg-[#DC143C]',
    textColor: 'text-[#DC143C]',
    imagePath: '/images/lidya.jpeg',
    description: 'Feminine energy\'nin ta kendisisin! Flirty, confident, magnetic. Herkes senin peşinde! 🔥',
    emoji: '💋'
  },
  mina: {
    name: 'MINA',
    color: 'mina',
    gradient: 'gradient-mina',
    bgColor: 'bg-[#F5F5DC]',
    textColor: 'text-[#8B7355]',
    imagePath: '/images/mina.jpeg',
    description: 'Asil ve zarif! Quiet luxury senin tarzın. High standards, unbothered queen! 🤍',
    emoji: '🦢'
  }
}

const QUESTIONS = [
  {
    id: 1,
    question: 'Grubun tatil planını yaparken senin rolün ne?',
    icon: Calendar,
    answers: [
      { text: 'Son sözü ben söylerim, rota benden sorulur.', girl: 'zeynep' },
      { text: 'Excel tablosu hazırlarım, her kuruşu hesaplarım.', girl: 'sueda' },
      { text: 'Bavulumu hazırladım bile! Hadi gidiyoruz!', girl: 'esin' },
      { text: 'Akşamki parti playlisti ve dans koreografisi bende.', girl: 'hilal' },
      { text: 'En iyi beach club\'da locayı ben ayarlarım, bakışlarımla.', girl: 'lidya' },
      { text: 'Siz halledin, ben sadece keyif yapmaya geliyorum.', girl: 'mina' }
    ]
  },
  {
    id: 2,
    question: 'Cumartesi gecesi partide sen ne yapıyorsun?',
    icon: Music,
    answers: [
      { text: 'Herkesi organize ediyorum, plan benden sorulur.', girl: 'zeynep' },
      { text: 'Dans pistinde koreografi yapıyorum, herkes bana bakıyor!', girl: 'hilal' },
      { text: 'Herkesle konuşuyorum, enerjim hiç bitmiyor!', girl: 'esin' },
      { text: 'Detayları kontrol ediyorum, her şey mükemmel olmalı.', girl: 'sueda' },
      { text: 'En iyi köşede oturup bakışlarımla herkesi büyülüyorum.', girl: 'lidya' },
      { text: 'Sessizce şampanya içiyorum, zarif ve unbothered.', girl: 'mina' }
    ]
  },
  {
    id: 3,
    question: 'Birisi sana laf attı. Tepkin ne?',
    icon: MessageCircle,
    answers: [
      { text: 'Direkt yüzüne söylerim, kimse beni hafife alamaz.', girl: 'zeynep' },
      { text: 'Barışçıl bir şekilde konuşmaya çalışırım.', girl: 'hilal' },
      { text: 'Gülüp geçerim, umursamam bile.', girl: 'esin' },
      { text: 'Mantıklı bir şekilde analiz edip cevap veririm.', girl: 'sueda' },
      { text: 'Bakışlarımla onu eritirim, söz bile etmem.', girl: 'lidya' },
      { text: 'Hiç umursamam, classy kalırım.', girl: 'mina' }
    ]
  },
  {
    id: 4,
    question: 'Grup projesinde senin görevin ne?',
    icon: Briefcase,
    answers: [
      { text: 'Liderlik bende, herkesi yönetiyorum.', girl: 'zeynep' },
      { text: 'Yaratıcı kısmı ben hallederim, sanat bende.', girl: 'hilal' },
      { text: 'Kahve getiriyorum, enerji veriyorum!', girl: 'esin' },
      { text: 'Tüm detayları ben kontrol ediyorum, mükemmeliyetçiyim.', girl: 'sueda' },
      { text: 'Sunumu ben yapıyorum, karizma bende.', girl: 'lidya' },
      { text: 'Sadece final kontrolü yapıyorum, quality over quantity.', girl: 'mina' }
    ]
  },
  {
    id: 5,
    question: 'Saç rengin ne olsun?',
    icon: Sparkles,
    answers: [
      { text: 'Mavi! Electric blue, main character vibes.', girl: 'zeynep' },
      { text: 'Mor! Purple queen, artistic ve vibrant.', girl: 'hilal' },
      { text: 'Sarı/Pembe! Blonde ama cute, energetic!', girl: 'esin' },
      { text: 'Doğal renk, profesyonel görünmeli.', girl: 'sueda' },
      { text: 'Siyah veya kırmızı, bold ve magnetic!', girl: 'lidya' },
      { text: 'Platinum blonde veya beige, quiet luxury.', girl: 'mina' }
    ]
  },
  {
    id: 6,
    question: 'Instagram story\'nde ne paylaşırsın?',
    icon: Heart,
    answers: [
      { text: 'Grubun lideri olduğumu gösteren bir foto.', girl: 'zeynep' },
      { text: 'Dans ederken veya şarkı söylerken bir video.', girl: 'hilal' },
      { text: 'Komik bir an, kaos ama eğlenceli!', girl: 'esin' },
      { text: 'Düzenli, estetik, her şey yerli yerinde.', girl: 'sueda' },
      { text: 'Feminine ve flirty bir foto, bakışlar önemli.', girl: 'lidya' },
      { text: 'Minimal, zarif, quiet luxury aesthetic.', girl: 'mina' }
    ]
  },
  {
    id: 7,
    question: 'Hafta sonu planın ne?',
    icon: Calendar,
    answers: [
      { text: 'Grubu organize edip en iyi yere gidiyoruz, ben karar veriyorum.', girl: 'zeynep' },
      { text: 'Sanat galerisi veya konser, kültürel bir aktivite.', girl: 'hilal' },
      { text: 'Spontane! Ne çıktıysa, enerji lazım!', girl: 'esin' },
      { text: 'İşle ilgili bir şeyler, kariyer odaklıyım.', girl: 'sueda' },
      { text: 'En trendy yerde, bakışlarımla herkesi etkiliyorum.', girl: 'lidya' },
      { text: 'Sakin bir yerde, zarif bir brunch veya spa.', girl: 'mina' }
    ]
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ zeynep: 0, hilal: 0, esin: 0, sueda: 0, lidya: 0, mina: 0 })
  const [showResult, setShowResult] = useState(false)
  const [selectedGirl, setSelectedGirl] = useState(null)

  const handleAnswer = (girl) => {
    const newScores = { ...scores }
    newScores[girl] += 1
    setScores(newScores)

    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      setTimeout(() => {
        calculateResult(newScores)
      }, 300)
    }
  }

  const calculateResult = (finalScores) => {
    const maxScore = Math.max(...Object.values(finalScores))
    const winners = Object.keys(finalScores).filter(girl => finalScores[girl] === maxScore)
    const winner = winners[Math.floor(Math.random() * winners.length)]
    setSelectedGirl(winner)
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores({ zeynep: 0, hilal: 0, esin: 0, sueda: 0, lidya: 0, mina: 0 })
    setShowResult(false)
    setSelectedGirl(null)
  }

  if (showResult && selectedGirl) {
    const girl = GIRLS[selectedGirl]
    return (
      <div className={`min-h-screen ${girl.bgColor} flex items-center justify-center p-4`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className={`${girl.gradient} rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden`}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-6xl mb-4"
              >
                {girl.emoji}
              </motion.div>
              
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-black mb-2 tracking-tight"
              >
                SEN {girl.name}SİN!
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl font-medium mb-6 leading-relaxed"
              >
                {girl.description}
              </motion.p>
              
              {/* Girl's photo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-2xl"
              >
                <img 
                  src={girl.imagePath} 
                  alt={girl.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                  }}
                />
              </motion.div>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={resetQuiz}
                className={`bg-white ${selectedGirl === 'mina' ? 'text-gray-800' : girl.textColor} font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform shadow-lg`}
              >
                Tekrar Oyna 🎀
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  const question = QUESTIONS[currentQuestion]
  const Icon = question.icon
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-beige-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-zeynep via-hilal to-esin rounded-full"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2 font-medium">
            Soru {currentQuestion + 1} / {QUESTIONS.length}
          </p>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              {/* Ana Logo */}
              <div className="mb-4 flex justify-center">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  src="/images/ana_logo.jpg"
                  alt="Manifest Logo"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zeynep via-hilal to-esin mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
                {question.question}
              </h2>
            </div>

            <div className="space-y-3">
              {question.answers.map((answer, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(answer.girl)}
                  className="w-full bg-gradient-to-r from-pink-50 to-blue-50 hover:from-zeynep hover:to-hilal hover:text-white text-gray-800 font-bold py-4 px-6 rounded-2xl transition-all duration-300 text-left border-2 border-transparent hover:border-white shadow-md hover:shadow-xl"
                >
                  {answer.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative elements */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 font-medium">
            🎀 Hangi Manifest Kızısın? 🎀
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
