import { SideDish, Drink, Restriction } from '@/lib/types';

// 새로운 안주 데이터 구조 (새로운 SideDish 인터페이스에 맞춤)
export const ANJU_DATA: SideDish[] = [
  {
    id: 'samgyeopsal',
    name: '삼겹살',
    category: 'meat',
    description: '고소하고 맛있는 돼지고기 삼겹살',
    image: '/images/dishes/samgyeopsal.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['light'],
      mood: ['solo', 'friends', 'festival', 'couple', 'camping'],
      hunger: ['hungry', 'soso'],
      price: ['low', 'middle'],
      restrictions: [],
      texture: ['chewy', 'soft'],
      place: ['home', 'outside', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy', 'soso', 'bad'],
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
    image: '/images/dishes/kimchijjigae.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['solo', 'friends', 'festival', 'camping'],
      hunger: ['hungry'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      place: ['home', 'outside', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
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
    image: '/images/dishes/eomukTang.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['tangy', 'spicy'],
      mood: ['solo', 'friends'],
      hunger: ['soso'],
      price: ['low', 'middle'],
      restrictions: ['seafood'],
      texture: ['chewy', 'soft'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['happy', 'soso'],
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
    image: '/images/dishes/tofuKimchi.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy', 'creamy'],
      mood: ['friends', 'solo', 'camping', 'festival'],
      hunger: ['soso', 'little'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      place: ['home', 'outside', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['stir-fried', 'clean'],
      feel: ['soso', 'bad'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'yukhoe',
    name: '육회',
    category: 'meat',
    description: '소고기로 만든 육회는 맛있는 안주 중 하나',
    image: '/images/dishes/yukhoe.png',
    tags: {
      drink: ['soju', 'makgeolli', 'beer'],
      taste: ['light', 'creamy'],
      mood: ['couple', 'solo', 'festival', 'friends'],
      hunger: ['soso', 'little'],
      price: ['low', 'middle'],
      restrictions: [],
      texture: ['soft'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful', 'quiet'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['happy', 'soso'],
      special: ['no'],
      retro: ['soso'],
      sns: ['like']
    }
  },
  {
    id: 'ojingeoSukhoe',
    name: '오징어 숙회',
    category: 'seafood',
    description: '데친 오징어를 초장에 콕 찍어 먹는 담백한 안주',
    image: '/images/dishes/ojingeoSukhoe.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['light', 'tangy'],
      mood: ['friends', 'solo'],
      hunger: ['soso', 'little'],
      price: ['low'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['cold'],
      style: ['clean'],
      feel: ['soso'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: 'gopchang',
    name: '곱창',
    category: 'meat',
    description: '불향 가득한 곱창은 소주의 친구',
    image: '/images/dishes/jeyuk.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy', 'creamy'],
      mood: ['friends', 'festival'],
      hunger: ['hungry', 'soso'],
      price: ['low', 'middle'],
      restrictions: ['intestines'],
      texture: ['chewy', 'soft'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['grill'],
      feel: ['happy', 'soso', 'bad'],
      special: ['no'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'jeyuk',
    name: '제육볶음',
    category: 'meat',
    description: '매콤달콤한 양념이 입맛을 살리는 제육볶음',
    image: '/images/dishes/jeyuk.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends', 'camping', 'festival'],
      hunger: ['hungry', 'soso'],
      price: ['low'],
      restrictions: [],
      texture: ['soft'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso', 'bad'],
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
    image: '/images/dishes/eomukTang.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends', 'festival'],
      hunger: ['soso', 'little'],
      price: ['middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['stir-fried', 'grill'],
      feel: ['soso', 'bad'],
      special: ['yes'],
      retro: ['like'],
      sns: ['like']
    }
  },
  {
    id: 'spicyChickenFeet',
    name: '매운 닭발',
    category: 'meat',
    description: '불맛 가득한 매운 닭발, 스트레스 해소용 안주',
    image: '/images/dishes/dakKkochi.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends', 'festival', 'friends', 'solo'],
      hunger: ['soso', 'little'],
      price: ['low'],
      restrictions: ['feet'],
      texture: ['chewy'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['bad', 'soso'],
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
    image: '/images/dishes/eomukTang.png',
    tags: {
      drink: ['soju', 'makgeolli'],
      taste: ['spicy'],
      mood: ['friends', 'festival', 'solo'],
      hunger: ['hungry', 'soso'],
      price: ['low', 'middle'],
      restrictions: ['seafood'],
      texture: ['chewy'],
      place: ['home', 'bar', 'neighbor'],
      atmosphere: ['active', 'peaceful'],
      temperature: ['warm'],
      style: ['stir-fried'],
      feel: ['soso', 'bad'],
      special: ['no'],
      retro: ['like'],
      sns: ['soso']
    }
  },
  {
    id: "friedChicken",
    name: "후라이드치킨",
    category: "meat",
    description: "겉은 바삭 속은 촉촉한 클래식 후라이드치킨",
    image: "/images/dishes/friedChicken.png",
    tags: {
      "drink": ["beer", "soju"],
      "taste": ["light"],
      "mood": ["friends", "festival", "solo", "couple", "camping"],
      "hunger": ["hungry", "soso"],
      "price": ["low", "middle"],
      "restrictions": ["none"],
      "texture": ["crispy"],
      "place": ["bar", "home", "outside", "neighbor"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["fried"],
      "feel": ["happy", "soso", "bad"],
      "special": ["no"],
      "retro": ["soso"],
      "sns": ["soso"]
    }
  },
  {
    id: "dakKkochi",
    name: "닭꼬치",
    category: "meat",
    description: "달달매콤한 소스를 입힌 닭고기 꼬치구이",
    image: "/images/dishes/dakKkochi.png",
    tags: {
      "drink": ["soju", "beer"],
      "taste": ["spicy", "creamy"],
      "mood": ["festival", "friends"],
      "hunger": ["soso"],
      "price": ["low"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["outside", "bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["happy"],
      "special": ["middle"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "eomukTang",
    name: "어묵탕",
    category: "soup",
    description: "따뜻한 국물에 각종 어묵을 넣은 속풀이용 안주",
    image: "/images/dishes/eomukTang.png",
    tags: {
      "drink": ["soju", "makgeolli"],
      "taste": ["light"],
      "mood": ["solo", "friends"],
      "hunger": ["soso"],
      "price": ["low"],
      "restrictions": ["seafood"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["bad", "soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "budaeJjigae",
    name: "부대찌개",
    category: "soup",
    description: "햄, 소시지, 김치가 어우러진 얼큰하고 푸짐한 찌개",
    image: "/images/dishes/budaeJjigae.png",
    tags: {
      "drink": ["soju", "beer", "makgeolli"],
      "taste": ["spicy"],
      "mood": ["friends", "festival"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["happy"],
      "special": ["middle"],
      "retro": ["like"],
      "sns": ["like"]
    }
  },
  {
    id: "galbiJjim",
    name: "갈비찜",
    category: "meat",
    description: "부드럽게 조린 갈비가 입에서 녹는 고급스러운 안주",
    image: "/images/dishes/galbiJjim.png",
    tags: {
      "drink": ["soju", "wine"],
      "taste": ["creamy"],
      "mood": ["couple", "friends"],
      "hunger": ["hungry"],
      "price": ["high", "premium"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["stir-fried"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["like"],
      "sns": ["like"]
    }
  },
  {
    id: "janguhGui",
    name: "장어구이",
    category: "seafood",
    description: "고소하게 구운 장어로 기력 회복에 좋은 안주",
    image: "/images/dishes/janguhGui.png",
    tags: {
      "drink": ["soju", "whiskey"],
      "taste": ["light"],
      "mood": ["solo", "couple"],
      "hunger": ["soso"],
      "price": ["premium"],
      "restrictions": ["seafood"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["like"],
      "sns": ["like"]
    }
  },
  {
    id: "haemulPajeon",
    name: "해물파전",
    category: "seafood",
    description: "쫄깃한 해물과 파가 어우러진 바삭한 전",
    image: "/images/dishes/haemulPajeon.png",
    tags: {
      "drink": ["makgeolli", "soju"],
      "taste": ["light"],
      "mood": ["friends", "festival"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["seafood"],
      "texture": ["crispy"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["fried"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "kimchiJeon",
    name: "김치전",
    category: "vegetable",
    description: "잘 익은 김치를 부쳐낸 새콤하고 바삭한 전",
    image: "/images/dishes/kimchiJeon.png",
    tags: {
      "drink": ["makgeolli", "soju"],
      "taste": ["spicy"],
      "mood": ["solo", "friends"],
      "hunger": ["soso"],
      "price": ["low"],
      "restrictions": ["none"],
      "texture": ["crispy"],
      "place": ["home"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["fried"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "gamjaJeon",
    name: "감자전",
    category: "vegetable",
    description: "담백하고 부드러운 감자를 부쳐낸 안주",
    image: "/images/dishes/gamjaJeon.png",
    tags: {
      "drink": ["makgeolli", "cocktail"],
      "taste": ["light"],
      "mood": ["solo", "friends", "couple"],
      "hunger": ["soso"],
      "price": ["low"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["fried"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "jogaeTang",
    name: "조개탕",
    category: "soup",
    description: "시원하고 깔끔한 국물의 조개탕",
    image: "/images/dishes/jogaeTang.png",
    tags: {
      "drink": ["soju", "makgeolli"],
      "taste": ["light"],
      "mood": ["solo", "friends"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["seafood"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "okonomiyaki",
    name: "오꼬노미야끼",
    category: "meat",
    description: "가쓰오부시와 마요네즈로 맛을 낸 일본식 부침 요리",
    image: "/images/dishes/okonomiyaki.png",
    tags: {
      "drink": ["beer", "cocktail"],
      "taste": ["creamy"],
      "mood": ["friends", "festival"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["bar", "home"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["fried"],
      "feel": ["happy"],
      "special": ["middle"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "jjambbong",
    name: "짬뽕",
    category: "noodle",
    description: "불향 가득한 매운 국물의 해산물 짬뽕",
    image: "/images/dishes/jjambbong.png",
    tags: {
      "drink": ["soju", "beer"],
      "taste": ["spicy"],
      "mood": ["solo", "friends"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["seafood"],
      "texture": ["chewy"],
      "place": ["bar", "home"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["soso"],
      "sns": ["soso"]
    }
  },
  {
    id: "sausage",
    name: "소시지",
    category: "meat",
    description: "짭짤하게 구운 소시지 안주",
    image: "/images/dishes/sausage.png",
    tags: {
      "drink": ["beer", "soju", "whiskey"],
      "taste": ["light"],
      "mood": ["friends", "festival"],
      "hunger": ["soso"],
      "price": ["low", "middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["bar", "home"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["soso"],
      "sns": ["soso"]
    }
  },
  {
    id: "jamon",
    name: "하몽",
    category: "meat",
    description: "스페인 전통 건조 생햄, 짭짤하고 고급스러운 맛",
    image: "/images/dishes/jamon.png",
    tags: {
      "drink": ["wine", "whiskey", "beer"],
      "taste": ["light"],
      "mood": ["couple", "festival", "solo"],
      "hunger": ["little"],
      "price": ["high", "premium"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "beefNoodleSoup",
    name: "우육면",
    category: "noodle",
    description: "진한 소고기 육수와 쫄깃한 면발의 대만식 국수",
    image: "/images/dishes/beefNoodleSoup.png",
    tags: {
      "drink": ["soju", "beer", "whiskey"],
      "taste": ["light"],
      "mood": ["solo", "friends"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["none"],
      "sns": ["soso"]
    }
  },
  {
    id: "pepperoniPizza",
    name: "페퍼로니피자",
    category: "snack",
    description: "짭짤한 페퍼로니가 가득한 클래식 피자",
    image: "/images/dishes/pepperoniPizza.png",
    tags: {
      "drink": ["beer", "soju", "cocktail"],
      "taste": ["light"],
      "mood": ["friends", "festival"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["happy"],
      "special": ["no"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "hawaiianPizza",
    name: "파인애플피자",
    category: "snack",
    description: "달콤한 파인애플과 짭짤한 햄의 조화",
    image: "/images/dishes/hawaiianPizza.png",
    tags: {
      "drink": ["beer", "cocktail", "soju"],
      "taste": ["tangy"],
      "mood": ["friends", "festival"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["happy"],
      "special": ["middle"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "ramyeon",
    name: "라면",
    category: "noodle",
    description: "뜨끈한 국물에 면이 어우러진 국민 야식",
    image: "/images/dishes/ramyeon.png",
    tags: {
      "drink": ["soju", "beer", "makgeolli"],
      "taste": ["spicy"],
      "mood": ["solo"],
      "hunger": ["hungry"],
      "price": ["low"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["bad"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "spicyBokkeumMyeon",
    name: "매운볶음면",
    category: "noodle",
    description: "매콤한 양념이 중독적인 볶음면",
    image: "/images/dishes/spicyBokkeumMyeon.png",
    tags: {
      "drink": ["beer", "soju"],
      "taste": ["spicy"],
      "mood": ["solo", "festival"],
      "hunger": ["hungry"],
      "price": ["low"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["stir-fried"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "yangKkochi",
    name: "양꼬치",
    category: "meat",
    description: "화로에 구워먹는 향긋한 양고기 꼬치",
    image: "/images/dishes/yangKkochi.png",
    tags: {
      "drink": ["soju", "beer", "whiskey"],
      "taste": ["light"],
      "mood": ["friends", "festival"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "jokbal",
    name: "족발",
    category: "meat",
    description: "쫄깃한 식감과 달큰한 간장양념의 족발",
    image: "/images/dishes/jokbal.png",
    tags: {
      "drink": ["soju", "beer"],
      "taste": ["light"],
      "mood": ["friends", "solo"],
      "hunger": ["hungry"],
      "price": ["middle", "high"],
      "restrictions": ["feet"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["middle"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "salmonSashimi",
    name: "연어회",
    category: "seafood",
    description: "신선하고 기름진 연어를 얇게 썰어낸 차가운 안주",
    image: "/images/dishes/salmonSashimi.png",
    tags: {
      "drink": ["soju", "whiskey", "wine", "cocktail"],
      "taste": ["creamy"],
      "mood": ["solo", "couple", "friends"],
      "hunger": ["soso"],
      "price": ["high"],
      "restrictions": ["seafood"],
      "texture": ["soft"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "shabuShabu",
    name: "샤브샤브",
    category: "meat",
    description: "얇게 썬 고기와 야채를 육수에 살짝 익혀 먹는 담백한 전골",
    image: "/images/dishes/shabuShabu.png",
    tags: {
      "drink": ["soju", "makgeolli", "wine"],
      "taste": ["light"],
      "mood": ["couple", "friends"],
      "hunger": ["hungry"],
      "price": ["high"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "aglioOlio",
    name: "알리오올리오",
    category: "noodle",
    description: "올리브유와 마늘로 간단하게 만든 이탈리아 오일 파스타",
    image: "/images/dishes/aglioOlio.png",
    tags: {
      "drink": ["wine", "beer", "cocktail"],
      "taste": ["light"],
      "mood": ["couple", "solo"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["middle"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "kalguksu",
    name: "칼국수",
    category: "noodle",
    description: "뽀얀 국물에 쫄깃한 면발이 들어간 따뜻한 칼국수",
    image: "/images/dishes/kalguksu.png",
    tags: {
      "drink": ["soju", "makgeolli"],
      "taste": ["light"],
      "mood": ["solo", "friends"],
      "hunger": ["hungry"],
      "price": ["low", "middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "fruitCake",
    name: "과일케이크",
    category: "snack",
    description: "상큼한 과일과 부드러운 크림이 어우러진 케이크",
    image: "/images/dishes/fruitCake.png",
    tags: {
      "drink": ["cocktail", "wine"],
      "taste": ["tangy"],
      "mood": ["couple", "solo"],
      "hunger": ["little"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "cheesecake",
    name: "치즈케이크",
    category: "snack",
    description: "진하고 부드러운 식감의 크리미한 디저트 케이크",
    image: "/images/dishes/cheesecake.png",
    tags: {
      "drink": ["wine", "cocktail"],
      "taste": ["creamy"],
      "mood": ["couple", "solo"],
      "hunger": ["little"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "sundaeBokkeum",
    name: "순대볶음",
    category: "meat",
    description: "야채와 순대를 매콤하게 볶아낸 국민 안주",
    image: "/images/dishes/sundaeBokkeum.png",
    tags: {
      "drink": ["soju", "makgeolli", "beer"],
      "taste": ["spicy"],
      "mood": ["friends", "festival"],
      "hunger": ["soso"],
      "price": ["low"],
      "restrictions": ["intestines"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["stir-fried"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "tomatoPasta",
    name: "토마토파스타",
    category: "noodle",
    description: "상큼한 토마토 소스가 매력적인 클래식 파스타",
    image: "/images/dishes/tomatoPasta.png",
    tags: {
      "drink": ["wine", "beer", "cocktail"],
      "taste": ["tangy"],
      "mood": ["couple", "friends"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["none"],
      "sns": ["soso"]
    }
  },
  {
    id: "creamPasta",
    name: "크림파스타",
    category: "noodle",
    description: "부드러운 크림소스가 특징인 풍미 깊은 파스타",
    image: "/images/dishes/creamPasta.png",
    tags: {
      "drink": ["wine", "cocktail", "beer"],
      "taste": ["creamy"],
      "mood": ["couple", "friends"],
      "hunger": ["soso"],
      "price": ["middle", "high"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["no"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "friedAssortment",
    name: "모듬튀김",
    category: "snack",
    description: "각종 재료를 튀겨낸 바삭하고 고소한 안주 모음",
    image: "/images/dishes/friedAssortment.png",
    tags: {
      "drink": ["beer", "soju", "makgeolli"],
      "taste": ["light"],
      "mood": ["friends", "festival"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["crispy"],
      "place": ["bar", "home"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["fried"],
      "feel": ["happy"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["like"]
    }
  },
  {
    id: "pho",
    name: "쌀국수",
    category: "noodle",
    description: "깔끔한 국물과 부드러운 쌀면이 어우러진 베트남식 면요리",
    image: "/images/dishes/pho.png",
    tags: {
      "drink": ["soju", "beer", "wine"],
      "taste": ["light"],
      "mood": ["solo", "friends"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["soup"],
      "feel": ["soso"],
      "special": ["no"],  
      "retro": ["none"],
      "sns": ["soso"]
    }
  },
  {
    id: "smokedDuck",
    name: "훈제오리",
    category: "meat",
    description: "불향 가득한 훈제 오리를 슬라이스한 안주",
    image: "/images/dishes/smokedDuck.png",
    tags: {
      "drink": ["soju", "beer", "whiskey"],
      "taste": ["light"],
      "mood": ["friends", "solo"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["active"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "flatfishSashimi",
    name: "광어회",
    category: "seafood",
    description: "신선한 광어를 얇게 썰어낸 대표적인 회 안주",
    image: "/images/dishes/flatfishSashimi.png",
    tags: {
      "drink": ["soju", "whiskey", "makgeolli"],
      "taste": ["light"],
      "mood": ["solo", "friends"],
      "hunger": ["soso"],
      "price": ["high"],
      "restrictions": ["seafood"],
      "texture": ["chewy"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["soso"],
      "sns": ["like"]
    }
  },
  {
    id: "gambasAlAjillo",
    name: "감바스알히오",
    category: "seafood",
    description: "올리브유와 마늘, 새우가 어우러진 에피타이저 안주",
    image: "/images/dishes/gambasAlAjillo.png",
    tags: {
      "drink": ["wine", "beer", "cocktail"],
      "taste": ["light"],
      "mood": ["couple", "friends"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["seafood"],
      "texture": ["chewy"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["middle"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "bossam",
    name: "보쌈",
    category: "meat",
    description: "삶은 돼지고기를 김치와 곁들여 먹는 푸짐한 안주",
    image: "/images/dishes/bossam.png",
    tags: {
      "drink": ["soju", "makgeolli"],
      "taste": ["light"],
      "mood": ["friends"],
      "hunger": ["hungry"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["no"],
      "retro": ["like"],
      "sns": ["soso"]
    }
  },
  {
    id: "cheesePlatter",
    name: "치즈플래터",
    category: "snack",
    description: "여러 종류의 치즈를 조합한 고급 안주",
    image: "/images/dishes/cheesePlatter.png",
    tags: {
      "drink": ["wine", "whiskey", "cocktail"],
      "taste": ["creamy"],
      "mood": ["couple", "friends"],
      "hunger": ["little"],
      "price": ["middle","high"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "tunaCanape",
    name: "참치카나페",
    category: "snack",
    description: "참치와 크래커의 조화로 가볍게 즐기는 핑거푸드",
    image: "/images/dishes/tunaCanape.png",
    tags: {
      "drink": ["wine", "cocktail"],
      "taste": ["light"],
      "mood": ["couple", "solo"],
      "hunger": ["little"],
      "price": ["middle"],
      "restrictions": ["seafood"],
      "texture": ["soft"],
      "place": ["home", "bar"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["soso"],
      "special": ["middle"],
      "retro": ["none"],
      "sns": ["soso"]
    }
  },
  {
    id: "caprese",
    name: "모짜렐라 토마토 카프레제",
    category: "vegetable",
    description: "신선한 모짜렐라와 토마토, 바질이 조화로운 샐러드 안주",
    image: "/images/dishes/caprese.png",
    tags: {
      "drink": ["wine", "cocktail"],
      "taste": ["light"],
      "mood": ["couple", "solo"],
      "hunger": ["little"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["soft"],
      "place": ["home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "gorgonzolaPizza",
    name: "고르곤졸라 피자",
    category: "snack",
    description: "고소한 블루치즈와 꿀이 어우러진 단짠 피자",
    image: "/images/dishes/gorgonzolaPizza.png",
    tags: {
      "drink": ["wine", "beer", "cocktail"],
      "taste": ["creamy"],
      "mood": ["friends", "couple"],
      "hunger": ["soso"],
      "price": ["middle"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["home", "bar"],
      "atmosphere": ["peaceful"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["soso"],
      "special": ["middle"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "smokedSalmon",
    name: "훈제연어",
    category: "seafood",
    description: "부드러운 식감과 훈제 향이 매력적인 고급 연어 안주",
    image: "/images/dishes/smokedSalmon.png",
    tags: {
      "drink": ["wine", "whiskey", "cocktail"],
      "taste": ["light"],
      "mood": ["couple", "solo"],
      "hunger": ["soso"],
      "price": ["high"],
      "restrictions": ["seafood"],
      "texture": ["soft"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["cold"],
      "style": ["clean"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["none"],
      "sns": ["like"]
    }
  },
  {
    id: "roastBeef",
    name: "로스트비프",
    category: "meat",
    description: "부드럽게 익힌 소고기를 얇게 썰어낸 클래식 안주",
    image: "/images/dishes/roastBeef.png",
    tags: {
      "drink": ["wine", "whiskey", "soju"],
      "taste": ["light"],
      "mood": ["couple", "friends"],
      "hunger": ["soso"],
      "price": ["high"],
      "restrictions": ["none"],
      "texture": ["chewy"],
      "place": ["bar", "home"],
      "atmosphere": ["quiet"],
      "temperature": ["warm"],
      "style": ["grill"],
      "feel": ["happy"],
      "special": ["yes"],
      "retro": ["soso"],
      "sns": ["like"]
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
  place: { weight: 2, match: 1.0, partial: 0.5 },
  atmosphere: { weight: 2, match: 1.0, partial: 0.5 },
  smell: { weight: 2, match: 1.0, partial: 0.5 },
  temperature: { weight: 2, match: 1.0, partial: 0.5 },
  style: { weight: 4, match: 1.0, partial: 0.6 },
  feel: { weight: 3, match: 1.0, partial: 0.6 },
  special: { weight: 2, match: 1.0, partial: 0.5 },
  retro: { weight: 1, match: 1.0, partial: 0.5 },
  sns: { weight: 1, match: 1.0, partial: 0.5 }
};

// 점수 계산 함수
export function calculateMatchScore(userValue: string | string[] | number | boolean | undefined, anjuValues: string[], config: { match: number; partial: number }): number {
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

  // 단일 값인 경우 (string으로 변환)
  const stringValue = String(userValue);
  if (anjuValues.includes(stringValue)) {
    return config.match;
  }

  // 부분 매칭 로직 (특별한 경우들)
  if (stringValue === 'none' || anjuValues.includes('none')) {
    return config.partial;
  }

  return 0;
}

// 제한사항 체크 함수
export function hasRestriction(userAnswers: Record<string, string | string[] | number | boolean>, anju: SideDish): boolean {
  const userRestrictions = userAnswers['restrictions'] || [];
  const anjuRestrictions = anju.tags.restrictions || [];

  // 사용자가 제한하는 재료가 안주에 포함되어 있으면 제외
  return (Array.isArray(userRestrictions) ? userRestrictions : []).some((restriction: string) =>
    anjuRestrictions.includes(restriction as Restriction)
  );
}

// 메인 추천 함수
export function getRecommendations(userAnswers: Record<string, string | string[] | number | boolean>, count: number = 5): (SideDish & { score: number; rawScore: number; maxScore: number })[] {
  // 1. 제한사항 체크하여 필터링
  const candidates = ANJU_DATA.filter(anju => !hasRestriction(userAnswers, anju));

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
  return SIDE_DISHES.filter(dish => dish.tags.drink.includes(drinkType as Drink));
}

export function getSideDishesByPopularity(): SideDish[] {
  // 인기도 정보가 없으므로 기본 정렬
  return [...SIDE_DISHES];
} 