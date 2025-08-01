import { SideDish, DrinkType, Taste, Mood, Hunger, Price, Restriction, Texture, Cook, Smell, Temperature, Style, Feel, Special, Retro, Sns } from '@/lib/types';

// 새로운 안주 데이터 구조 (새로운 SideDish 인터페이스에 맞춤)
export const ANJU_DATA: SideDish[] = [
  {
    id: 'samgyeopsal',
    name: '삼겹살',
    category: 'meat',
    description: '고소하고 맛있는 돼지고기 삼겹살',
    image: '/images/samgyeopsal.jpg',
    tags: {
      drinkType: ['soju', 'beer', 'makgeolli'],
      taste: ['creamy'],
      mood: ['solo' ,'friends', 'festival', 'couple','camping'],
      hunger: ['hungry', 'soso'],
      price: ['low','middle'],
      restrictions: [],
      texture: ['chewy', 'soft'],
      cook: ['cook'],
      smell: ['sensitive'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy', 'soso'],
      special: ['no', 'middle'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'kimchijjigae',
    name: '김치찌개',
    category: 'soup',
    description: '진하게 끓인 매콤한 김치찌개는 소주와 찰떡궁합',
    image: '/images/kimchijjigae.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['solo', 'friends'],
      hunger: ['hungry'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['sensitive'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad', 'soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'golbaengi',
    name: '골뱅이무침',
    category: 'seafood',
    description: '새콤달콤한 양념에 쫄깃한 골뱅이를 무친 인기 안주',
    image: '/images/golbaengi.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['tangy'],
      mood: ['solo','friends', 'festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'tofuKimchi',
    name: '두부김치',
    category: 'vegetable',
    description: '담백한 두부와 볶은 김치의 완벽한 조화',
    image: '/images/tofukimchi.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy', 'creamy'],
      mood: ['friends', 'solo'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'ganjangGejang',
    name: '간장게장',
    category: 'seafood',
    description: '밥도둑으로 유명한 짭짤한 간장게장',
    image: '/images/ganjanggejang.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['creamy'],
      mood: ['couple', 'solo'],
      hunger: ['soso'],
      price: ['high'],
      restrictions: ['seafood'],
      texture: ['soft'],
      cook: ['none'],
      smell: ['sensitive'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['soso'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'yukhoe',
    name: '육회',
    category: 'meat',
    description: '신선한 한우로 만든 육회는 고급 안주 중 하나',
    image: '/images/yukhoe.jpg',
    tags: {
      drinkType: ['soju', 'whiskey'],
      taste: ['none'],
      mood: ['couple', 'solo'],
      hunger: ['soso'],
      price: ['high'],
      restrictions: [],
      texture: ['soft'],
      cook: ['none'],
      smell: ['normal'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'ojingeoSukhoe',
    name: '오징어 숙회',
    category: 'seafood',
    description: '데친 오징어를 초장에 콕 찍어 먹는 담백한 안주',
    image: '/images/ojingeo.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['refreshing'],
      mood: ['friends', 'solo'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'beondaegi',
    name: '번데기탕',
    category: 'soup',
    description: '호불호 갈리지만 은근히 매력 있는 번데기탕',
    image: '/images/beondaegi.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['none'],
      mood: ['solo'],
      hunger: ['little'],
      price: ['low'],
      restrictions: ['intestines'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['sensitive'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['yes'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'gopchang',
    name: '곱창구이',
    category: 'meat',
    description: '불향 가득한 곱창구이는 소주의 친구',
    image: '/images/gopchang.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['spicy', 'creamy'],
      mood: ['friends', 'festival'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: ['intestines'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['sensitive'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'jeyuk',
    name: '제육볶음',
    category: 'meat',
    description: '매콤달콤한 양념이 입맛을 살리는 제육볶음',
    image: '/images/jeyuk.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['spicy'],
      mood: ['friends', 'camping'],
      hunger: ['hungry'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'ggomjanguh',
    name: '꼼장어',
    category: 'seafood',
    description: '양념 꼼장어의 매콤한 맛이 술맛을 끌어올린다',
    image: '/images/ggomjanguh.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'spicyChickenFeet',
    name: '매운 닭발',
    category: 'meat',
    description: '불맛 가득한 매운 닭발, 스트레스 해소용 안주',
    image: '/images/spicyChickenFeet.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['feet'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['bad'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'sundaeBokkeum',
    name: '순대볶음',
    category: 'meat',
    description: '양배추와 당면, 순대를 매콤하게 볶아낸 안주',
    image: '/images/sundaeBokkeum.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends', 'solo'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['intestines'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'nakjiBokkeum',
    name: '낙지볶음',
    category: 'seafood',
    description: '쫄깃한 낙지를 매콤하게 볶아낸 인기 안주',
    image: '/images/nakjiBokkeum.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'bukeojjim',
    name: '북어찜',
    category: 'seafood',
    description: '부드럽게 쪄낸 북어에 매콤한 양념을 더한 찜 요리',
    image: '/images/bukeojjim.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['solo', 'friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'odolppyeo',
    name: '오돌뼈',
    category: 'meat',
    description: '쫄깃하고 바삭한 오돌뼈에 매콤한 양념을 더한 술안주',
    image: '/images/odolppyeo.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy', 'chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['happy'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'dakbokkeumtang',
    name: '닭볶음탕',
    category: 'soup',
    description: '매콤한 국물과 닭고기의 조화가 일품인 찜 요리',
    image: '/images/dakbokkeumtang.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['camping', 'friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'gondreBap',
    name: '곤드레밥',
    category: 'rice',
    description: '담백한 곤드레 나물밥, 부담 없는 깔끔한 한식 안주',
    image: '/images/gondreBap.jpg',
    tags: {
      drinkType: ['makgeolli'],
      taste: ['creamy'],
      mood: ['solo', 'camping'],
      hunger: ['hungry'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['bad', 'soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'yeonpotang',
    name: '연포탕',
    category: 'soup',
    description: '산낙지와 맑은 국물의 조화, 해장에도 좋은 연포탕',
    image: '/images/yeonpotang.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['refreshing'],
      mood: ['solo', 'camping'],
      hunger: ['soso'],
      price: ['high'],
      restrictions: ['seafood'],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['yes'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'bulDakbal',
    name: '불닭발볶음',
    category: 'meat',
    description: '극강의 매운맛으로 스트레스를 날리는 안주',
    image: '/images/bulDakbal.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['feet'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['bad'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'porkSkin',
    name: '돼지껍데기',
    category: 'meat',
    description: '콜라겐 가득 쫄깃한 식감의 불향 돼지껍데기',
    image: '/images/porkSkin.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['creamy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['intestines'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['soso'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'myeongranEggSteam',
    name: '명란계란찜',
    category: 'soup',
    description: '부드러운 계란찜에 짭짤한 명란이 어우러진 일품',
    image: '/images/myeongranEggSteam.jpg',
    tags: {
      drinkType: ['soju', 'cocktail'],
      taste: ['creamy'],
      mood: ['solo', 'couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'kimchizzim',
    name: '김치찜',
    category: 'soup',
    description: '묵은지와 돼지고기의 조화, 얼큰한 김치찜',
    image: '/images/kimchizzim.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends', 'solo'],
      hunger: ['hungry'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'eelGrill',
    name: '장어구이',
    category: 'seafood',
    description: '고단백 장어를 달콤짭짤한 양념에 구워낸 보양식',
    image: '/images/eelGrill.jpg',
    tags: {
      drinkType: ['soju', 'whiskey'],
      taste: ['creamy'],
      mood: ['couple', 'solo'],
      hunger: ['hungry'],
      price: ['high'],
      restrictions: ['seafood'],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['bad', 'soso'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'kodariJorim',
    name: '코다리조림',
    category: 'seafood',
    description: '말린 명태를 매콤달콤하게 졸여낸 추억의 맛',
    image: '/images/kodariJorim.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'galbijjim',
    name: '갈비찜',
    category: 'meat',
    description: '달콤하고 부드러운 고기의 풍미가 일품인 갈비찜',
    image: '/images/galbijjim.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['creamy'],
      mood: ['couple', 'friends', 'camping'],
      hunger: ['hungry'],
      price: ['high'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'dakhanmari',
    name: '닭한마리',
    category: 'soup',
    description: '시원하고 담백한 국물에 푹 익힌 닭이 매력적인 요리',
    image: '/images/dakhanmari.jpg',
    tags: {
      drinkType: ['makgeolli', 'soju'],
      taste: ['creamy'],
      mood: ['couple', 'solo'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['no'],
      retro: ['soso'],
      sns: ['soso']
    }
  },
  {
    id: 'budaejjigae',
    name: '부대찌개',
    category: 'soup',
    description: '햄, 소시지, 라면사리의 조화! 국물 안주의 끝판왕',
    image: '/images/budaejjigae.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'ttukbulgogi',
    name: '뚝배기불고기',
    category: 'meat',
    description: '달큰한 국물에 고기가 풍성한 따끈한 불고기탕',
    image: '/images/ttukbulgogi.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['creamy'],
      mood: ['solo', 'friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'altang',
    name: '알탕',
    category: 'soup',
    description: '매콤한 국물과 알의 독특한 식감이 조화로운 해물탕',
    image: '/images/altang.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['middle'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'kimchiJeongol',
    name: '김치전골',
    category: 'soup',
    description: '진하고 얼큰한 김치와 다양한 재료의 조합',
    image: '/images/kimchiJeongol.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'gimmari',
    name: '김말이 튀김',
    category: 'snack',
    description: '김밥처럼 말아 튀긴 바삭한 인기 분식 안주',
    image: '/images/gimmari.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['none'],
      mood: ['festival', 'friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'fishcakeSoup',
    name: '어묵탕',
    category: 'soup',
    description: '따뜻한 국물에 어묵이 푸짐하게 들어간 국민 술안주',
    image: '/images/fishcakeSoup.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['creamy'],
      mood: ['solo', 'camping'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'gamjatang',
    name: '감자탕',
    category: 'soup',
    description: '뼈와 우거지가 어우러진 진한 국물요리',
    image: '/images/gamjatang.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'jjukkumi',
    name: '쭈꾸미볶음',
    category: 'seafood',
    description: '매콤한 양념과 쫄깃한 식감의 쭈꾸미 요리',
    image: '/images/jjukkumi.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['festival', 'friends'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['happy'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'shellSoup',
    name: '조개탕',
    category: 'soup',
    description: '시원한 국물이 매력적인 조개탕',
    image: '/images/shellSoup.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['refreshing'],
      mood: ['solo', 'friends'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['no'],
      retro: ['soso'],
      sns: ['soso']
    }
  },
  {
    id: 'dakbal',
    name: '닭발',
    category: 'meat',
    description: '쫄깃하고 매운 닭발, 강렬한 술안주',
    image: '/images/dakbal.jpg',
    tags: {
      drinkType: ['soju'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['feet'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['bad'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'driedSquid',
    name: '마른오징어',
    category: 'seafood',
    description: '고소하고 쫄깃한 건오징어, 맥주와 궁합 최고',
    image: '/images/driedSquid.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['none'],
      mood: ['solo', 'camping'],
      hunger: ['little'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['none'],
      smell: ['normal'],
      temperature: ['none'],
      style: ['clean'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'nogari',
    name: '노가리',
    category: 'seafood',
    description: '간단하게 즐기는 바삭한 건조 생선 안주',
    image: '/images/nogari.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['none'],
      mood: ['solo', 'friends'],
      hunger: ['little'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['none'],
      smell: ['normal'],
      temperature: ['none'],
      style: ['clean'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'jokbalBossam',
    name: '족발 또는 보쌈',
    category: 'meat',
    description: '부드럽고 쫄깃한 고기의 풍미, 인기 안주 세트',
    image: '/images/jokbalBossam.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['creamy'],
      mood: ['friends', 'couple'],
      hunger: ['hungry'],
      price: ['high'],
      restrictions: [],
      texture: ['chewy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'dakgalbi',
    name: '닭갈비',
    category: 'meat',
    description: '매콤달콤한 양념에 고소한 닭과 야채가 어우러진 볶음 요리',
    image: '/images/dakgalbi.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['chewy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'tteokbokki',
    name: '떡볶이',
    category: 'noodle',
    description: '매콤달콤한 국민 분식, 가볍게 즐기기 좋은 안주',
    image: '/images/tteokbokki.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'yukgaejang',
    name: '육개장',
    category: 'soup',
    description: '얼큰하고 진한 육개장은 속풀이와 해장에 제격',
    image: '/images/yukgaejang.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['solo', 'friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['soup'],
      feel: ['bad'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'friedChicken',
    name: '치킨 (프라이드)',
    category: 'meat',
    description: '바삭한 튀김옷과 고소한 육즙의 조화',
    image: '/images/friedChicken.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['creamy'],
      mood: ['friends', 'festival'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'frenchFries',
    name: '감자튀김',
    category: 'snack',
    description: '맥주와 환상의 짝꿍, 바삭한 감자튀김',
    image: '/images/frenchFries.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['none'],
      mood: ['festival', 'friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'pizza',
    name: '피자',
    category: 'rice',
    description: '고소한 치즈와 짭짤한 토핑이 조화로운 이탈리안 대표 안주',
    image: '/images/pizza.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['creamy'],
      mood: ['friends', 'festival'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['no'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'hotdog',
    name: '핫도그',
    category: 'snack',
    description: '소시지와 빵의 간단하면서 든든한 조화',
    image: '/images/hotdog.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['none'],
      mood: ['festival', 'friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'nachoCheese',
    name: '나쵸 & 치즈소스',
    category: 'snack',
    description: '고소하고 짭짤한 나쵸에 진한 치즈소스를 곁들인 안주',
    image: '/images/nachoCheese.jpg',
    tags: {
      drinkType: ['cocktail', 'beer'],
      taste: ['creamy'],
      mood: ['festival'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['microwave'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['none'],
      sns: ['like']
    }
  },
  {
    id: 'seasonedFries',
    name: '양념감자',
    category: 'snack',
    description: '양념 가루를 뿌려 감칠맛을 더한 감자튀김',
    image: '/images/seasonedFries.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['tangy'],
      mood: ['festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['none'],
      sns: ['like']
    }
  },
  {
    id: 'cornButter',
    name: '콘버터',
    category: 'vegetable',
    description: '옥수수와 버터의 고소함이 어우러진 안주',
    image: '/images/cornButter.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['creamy'],
      mood: ['solo', 'couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'buffaloWing',
    name: '버팔로윙',
    category: 'meat',
    description: '매콤한 소스가 매력적인 닭날개 튀김',
    image: '/images/buffaloWing.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'sausagePlatter',
    name: '소시지 플래터',
    category: 'meat',
    description: '다양한 종류의 소시지를 구워낸 풍성한 안주',
    image: '/images/sausagePlatter.jpg',
    tags: {
      drinkType: ['beer', 'whiskey'],
      taste: ['creamy'],
      mood: ['friends', 'camping'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'squidRing',
    name: '오징어링 튀김',
    category: 'seafood',
    description: '쫄깃한 오징어를 바삭하게 튀긴 링 스타일 튀김',
    image: '/images/squidRing.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['none'],
      mood: ['festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'onionRing',
    name: '어니언링',
    category: 'vegetable',
    description: '달큰한 양파를 튀긴 바삭한 인기 안주',
    image: '/images/onionRing.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['none'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'creamCheesePretzel',
    name: '크림치즈 프레첼',
    category: 'snack',
    description: '짭짤한 프레첼에 달콤한 크림치즈의 조화',
    image: '/images/creamCheesePretzel.jpg',
    tags: {
      drinkType: ['cocktail'],
      taste: ['creamy'],
      mood: ['couple'],
      hunger: ['little'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['none'],
      smell: ['normal'],
      temperature: ['none'],
      style: ['clean'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['none'],
      sns: ['like']
    }
  },
  {
    id: 'garlicBread',
    name: '마늘빵',
    category: 'snack',
    description: '버터와 마늘 향이 어우러진 고소한 빵',
    image: '/images/garlicBread.jpg',
    tags: {
      drinkType: ['wine', 'cocktail'],
      taste: ['creamy'],
      mood: ['couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'tornadoSausage',
    name: '회오리 소시지',
    category: 'meat',
    description: '비주얼이 재밌고 바삭한 회오리형 소시지 튀김',
    image: '/images/tornadoSausage.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['none'],
      mood: ['festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['middle'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'cheeseBall',
    name: '치즈볼',
    category: 'snack',
    description: '바삭한 튀김 속에 부드러운 치즈가 가득!',
    image: '/images/cheeseBall.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['creamy'],
      mood: ['festival', 'friends'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['none'],
      sns: ['like']
    }
  },
  {
    id: 'seasonedChicken',
    name: '양념치킨',
    category: 'meat',
    description: '매콤달콤한 소스가 묻은 국민 안주',
    image: '/images/seasonedChicken.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'tortillaPizza',
    name: '또띠아 피자',
    category: 'rice',
    description: '얇고 바삭한 도우에 간편한 토핑을 얹은 피자 스타일 안주',
    image: '/images/tortillaPizza.jpg',
    tags: {
      drinkType: ['cocktail', 'beer'],
      taste: ['creamy'],
      mood: ['couple', 'friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['none'],
      sns: ['soso']
    }
  },
  {
    id: 'gyeranMari',
    name: '계란말이',
    category: 'vegetable',
    description: '부드럽고 담백한 계란요리, 모든 술과 잘 어울림',
    image: '/images/gyeranMari.jpg',
    tags: {
      drinkType: ['soju', 'makgeolli'],
      taste: ['creamy'],
      mood: ['solo', 'couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'karaage',
    name: '가라아게',
    category: 'meat',
    description: '일본식 간장 베이스의 바삭한 닭튀김',
    image: '/images/karaage.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['creamy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'baconRiceCakeSkewer',
    name: '베이컨말이 떡꼬치',
    category: 'meat',
    description: '쫄깃한 떡과 짭짤한 베이컨의 조화',
    image: '/images/baconRiceCakeSkewer.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['spicy'],
      mood: ['friends'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['chewy', 'crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'cornCheese',
    name: '콘치즈',
    category: 'vegetable',
    description: '옥수수와 치즈의 고소함이 어우러진 간편 안주',
    image: '/images/cornCheese.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['creamy'],
      mood: ['solo', 'couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'chickenNugget',
    name: '치킨너겟',
    category: 'meat',
    description: '바삭하고 부드러운 닭고기 튀김',
    image: '/images/chickenNugget.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['none'],
      mood: ['friends', 'festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'hashBrown',
    name: '해쉬브라운',
    category: 'snack',
    description: '감자를 바삭하게 튀겨낸 고소한 감자스낵',
    image: '/images/hashBrown.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['none'],
      mood: ['solo', 'festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'shrimpSnack',
    name: '바삭한 새우깡',
    category: 'snack',
    description: '익숙하고 바삭한 식감의 새우 스낵',
    image: '/images/shrimpSnack.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['none'],
      mood: ['solo', 'camping'],
      hunger: ['little'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['crispy'],
      cook: ['none'],
      smell: ['normal'],
      temperature: ['none'],
      style: ['clean'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'mozzarellaStick',
    name: '모짜렐라스틱',
    category: 'snack',
    description: '치즈가 쭉 늘어나는 바삭한 튀김 안주',
    image: '/images/mozzarellaStick.jpg',
    tags: {
      drinkType: ['cocktail', 'beer'],
      taste: ['creamy'],
      mood: ['couple', 'festival'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'fishAndChips',
    name: '피쉬앤칩스',
    category: 'seafood',
    description: '흰살생선과 감자튀김의 정통 조합',
    image: '/images/fishAndChips.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['creamy'],
      mood: ['friends'],
      hunger: ['hungry'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['soso']
    }
  },
  {
    id: 'kanpunggi',
    name: '깐풍기',
    category: 'meat',
    description: '달콤짭짤한 중식풍의 매콤한 닭튀김',
    image: '/images/kanpunggi.jpg',
    tags: {
      drinkType: ['soju', 'beer'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'friedChickenSkin',
    name: '닭껍질튀김',
    category: 'meat',
    description: '극강의 바삭함과 고소함을 자랑하는 튀김 안주',
    image: '/images/friedChickenSkin.jpg',
    tags: {
      drinkType: ['beer'],
      taste: ['creamy'],
      mood: ['festival'],
      hunger: ['little'],
      price: ['low'],
      restrictions: ['intestines'],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['middle'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'mayoCorn',
    name: '마요콘옥수수',
    category: 'vegetable',
    description: '달콤한 옥수수와 마요네즈의 환상적인 조화',
    image: '/images/mayoCorn.jpg',
    tags: {
      drinkType: ['cocktail'],
      taste: ['creamy'],
      mood: ['couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['clean'],
      feel: ['happy'],
      special: ['no'],
      retro: ['none'],
      sns: ['soso']
    }
  },
  {
    id: 'cabbageHotdog',
    name: '양배추 핫도그',
    category: 'snack',
    description: '양배추와 소시지가 어우러진 독특한 핫도그',
    image: '/images/cabbageHotdog.jpg',
    tags: {
      drinkType: ['beer', 'cocktail'],
      taste: ['none'],
      mood: ['festival'],
      hunger: ['soso'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['soso']
    }
  },
  {
    id: 'gorgonzolaPizza',
    name: '고르곤졸라 피자',
    category: 'rice',
    description: '단짠의 조화, 꿀 찍어 먹는 풍미 가득 피자',
    image: '/images/gorgonzolaPizza.jpg',
    tags: {
      drinkType: ['wine', 'cocktail'],
      taste: ['creamy'],
      mood: ['couple'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['none'],
      sns: ['like']
    }
  },
  {
    id: 'smokedBacon',
    name: '훈제베이컨',
    category: 'meat',
    description: '고소하고 짭짤한 베이컨의 풍미',
    image: '/images/smokedBacon.jpg',
    tags: {
      drinkType: ['whiskey', 'beer'],
      taste: ['creamy'],
      mood: ['solo', 'camping'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'pickleBall',
    name: '피클볼',
    category: 'snack',
    description: '튀김 속에 피클이 쏙! 상큼한 튀김 안주',
    image: '/images/pickleBall.jpg',
    tags: {
      drinkType: ['cocktail', 'beer'],
      taste: ['tangy'],
      mood: ['festival', 'friends'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['crispy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['none'],
      sns: ['like']
    }
  },
  {
    id: 'dakGangjeong',
    name: '닭강정',
    category: 'meat',
    description: '달콤짭짤한 소스와 튀김의 환상 조합',
    image: '/images/dakGangjeong.jpg',
    tags: {
      drinkType: ['beer', 'soju'],
      taste: ['spicy'],
      mood: ['festival', 'friends'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['crispy', 'soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['fried'],
      feel: ['happy'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'pretzel',
    name: '프레첼',
    category: 'snack',
    description: '짭짤하고 단단한 식감의 독일식 베이커리 스낵',
    image: '/images/pretzel.jpg',
    tags: {
      drinkType: ['cocktail', 'beer'],
      taste: ['none'],
      mood: ['solo', 'couple'],
      hunger: ['little'],
      price: ['low'],
      restrictions: [],
      texture: ['chewy'],
      cook: ['none'],
      smell: ['normal'],
      temperature: ['none'],
      style: ['clean'],
      feel: ['soso'],
      special: ['no'],
      retro: ['soso'],
      sns: ['soso']
    }
  },
  {
    id: 'garlicButterShrimp',
    name: '마늘버터 새우구이',
    category: 'seafood',
    description: '풍미 깊은 마늘과 버터로 구워낸 통새우',
    image: '/images/garlicButterShrimp.jpg',
    tags: {
      drinkType: ['wine', 'soju'],
      taste: ['creamy'],
      mood: ['couple', 'solo'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'macAndCheese',
    name: '마카로니 앤 치즈',
    category: 'rice',
    description: '부드러운 마카로니와 진한 치즈의 미국식 퓨전 안주',
    image: '/images/macAndCheese.jpg',
    tags: {
      drinkType: ['cocktail', 'wine'],
      taste: ['creamy'],
      mood: ['couple'],
      hunger: ['soso'],
      price: ['middle'],
      restrictions: [],
      texture: ['soft'],
      cook: ['cook'],
      smell: ['normal'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['happy'],
      special: ['yes'],
      retro: ['none'],
      sns: ['like']
    }
  }
];

// 점수 시스템 설정
export const SCORING_CONFIG = {
  drinkType: { weight: 10, match: 1.0, partial: 0.5 },
  taste: { weight: 8, match: 1.0, partial: 0.7 },
  mood: { weight: 6, match: 1.0, partial: 0.6 },
  hunger: { weight: 5, match: 1.0, partial: 0.5 },
  price: { weight: 4, match: 1.0, partial: 0.8 },
  restrictions: { weight: 3, match: 1.0, partial: 0.0 }, // 제한사항 (페널티)
  texture: { weight: 3, match: 1.0, partial: 0.6 },
  cook: { weight: 2, match: 1.0, partial: 0.5 },
  smell: { weight: 2, match: 1.0, partial: 0.5 },
  temperature: { weight: 2, match: 1.0, partial: 0.5 },
  style: { weight: 4, match: 1.0, partial: 0.6 },
  feel: { weight: 3, match: 1.0, partial: 0.6 },
  special: { weight: 2, match: 1.0, partial: 0.5 },
  retro: { weight: 1, match: 1.0, partial: 0.5 },
  sns: { weight: 1, match: 1.0, partial: 0.5 }
};

// 점수 계산 함수
export function calculateMatchScore(userValue: any, anjuValues: any[], config: any): number {
  if (!userValue || !anjuValues || anjuValues.length === 0) {
    return 0;
  }

  // 배열인 경우 (다중 선택)
  if (Array.isArray(userValue)) {
    const matches = userValue.filter(value => anjuValues.includes(value));
    if (matches.length > 0) {
      return config.match;
    }
    return 0;
  }

  // 단일 값인 경우
  if (anjuValues.includes(userValue)) {
    return config.match;
  }

  // 부분 매칭 로직 (특별한 경우들)
  if (userValue === 'none' || anjuValues.includes('none')) {
    return config.partial;
  }

  return 0;
}

// 제한사항 체크 함수
export function hasRestriction(userAnswers: any, anju: SideDish): boolean {
  const userRestrictions = userAnswers['restrictions'] || [];
  const anjuRestrictions = anju.tags.restrictions || [];

  // 사용자가 제한하는 재료가 안주에 포함되어 있으면 제외
  return userRestrictions.some((restriction: Restriction) =>
    anjuRestrictions.includes(restriction)
  );
}

// 메인 추천 함수
export function getRecommendations(userAnswers: any, count: number = 5): (SideDish & { score: number; rawScore: number; maxScore: number })[] {
  // 1. 제한사항 체크하여 필터링
  let candidates = ANJU_DATA.filter(anju => !hasRestriction(userAnswers, anju));

  // 2. 점수 계산
  const scoredAnju = candidates.map(anju => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    Object.keys(SCORING_CONFIG).forEach(category => {
      const config = SCORING_CONFIG[category as keyof typeof SCORING_CONFIG];
      const userValue = userAnswers[category];
      const anjuValues = anju.tags[category as keyof typeof anju.tags] || [];

      const matchScore = calculateMatchScore(userValue, anjuValues, config);
      totalScore += matchScore * config.weight;
      maxPossibleScore += config.weight;
    });

    const normalizedScore = maxPossibleScore > 0 ? totalScore / maxPossibleScore : 0;

    return {
      ...anju,
      score: normalizedScore,
      rawScore: totalScore,
      maxScore: maxPossibleScore
    };
  });

  // 3. 점수순으로 정렬하고 상위 결과 반환
  return scoredAnju
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => ({
      ...item,
      score: Math.round(item.score * 100) // 백분율로 변환
    }));
}

// 기존 함수들 (호환성 유지)
export const SIDE_DISHES: SideDish[] = ANJU_DATA;

export function getSideDishById(id: string): SideDish | undefined {
  return SIDE_DISHES.find(dish => dish.id === id);
}

export function getSideDishesByCategory(category: string): SideDish[] {
  return SIDE_DISHES.filter(dish => dish.category === category);
}

export function getSideDishesByDrinkType(drinkType: string): SideDish[] {
  return SIDE_DISHES.filter(dish => dish.tags.drinkType.includes(drinkType as DrinkType));
}

export function getSideDishesByPopularity(): SideDish[] {
  // 인기도 정보가 없으므로 기본 정렬
  return [...SIDE_DISHES];
} 