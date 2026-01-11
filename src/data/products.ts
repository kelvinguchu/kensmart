import { HiBeaker, HiFire, HiLightningBolt } from 'react-icons/hi'
import type { IconType } from 'react-icons'

export interface Product {
  id: string
  name: string
  type: 'Electricity' | 'Water' | 'Gas'
  tagline: string
  description: string
  features: Array<string>
  idealFor: Array<string>
  price: string
  wholesalePrice?: string
  retailPrice?: string
  image: string
  icon: IconType
  color: string
  bgColor: string
  popular: boolean
}

export const products: Array<Product> = [
  {
    id: 'integrated',
    name: 'Integrated Electric Prepaid Meter',
    type: 'Electricity',
    tagline: 'Compact All-in-One Solution',
    description:
      'A unified prepaid metering system that combines measurement and payment interface in one sleek unit. Perfect for straightforward installations where tenants manage their own top-ups directly on the device.',
    features: [
      'Budget-friendly pricing',
      'Quick and simple setup',
      'Integrated tamper protection',
      'On-device token input keypad',
      'Clear LCD for balance tracking',
    ],
    idealFor: [
      'Studio apartments',
      'Single-room rentals',
      'Hostel accommodations',
      'Cost-effective property solutions',
    ],
    price: '5,000',
    wholesalePrice: '4,500',
    retailPrice: '5,000',
    image: '/products/integrated-electric.jpeg',
    icon: HiLightningBolt,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
    popular: true,
  },
  {
    id: 'split',
    name: 'Split Electric Prepaid Meter',
    type: 'Electricity',
    tagline: 'Enhanced Security Design',
    description:
      'A two-component system that separates the metering unit from the user interface. The measurement module stays secured in the electrical panel while tenants interact with a wireless display unit for convenient token entry.',
    features: [
      'Tamper-resistant locked installation',
      'Wireless Customer Interface Unit',
      'Advanced PLC/RF connectivity',
      'User-friendly tenant experience',
      'Live consumption monitoring',
    ],
    idealFor: [
      'High-security residences',
      'Premium apartment complexes',
      'Properties requiring theft prevention',
      'Business premises',
    ],
    price: '7,000',
    wholesalePrice: '6,500',
    retailPrice: '7,000',
    image: '/products/split-electric.jpeg',
    icon: HiLightningBolt,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
    popular: false,
  },
  {
    id: 'water',
    name: 'Water Prepaid Meter',
    type: 'Water',
    tagline: 'Smart Aqua Management',
    description:
      'An intelligent water metering solution with automatic valve control. Detects leaks early, prevents water wastage, and automatically shuts off when credit runs out—protecting both your property and your wallet.',
    features: [
      'Motorized valve control',
      'Leak detection system',
      'Zero-credit auto shutoff',
      'Low battery notifications',
      'High-precision measurement',
    ],
    idealFor: [
      'Housing estates',
      'Commercial properties',
      'Water conservation projects',
      'Gated developments',
    ],
    price: '11,000',
    image: '/products/water-prepaid.avif',
    icon: HiBeaker,
    color: 'text-teal-500',
    bgColor: 'bg-teal-50 dark:bg-teal-950/20',
    popular: true,
  },
  {
    id: 'three-phase',
    name: '3 Phase Prepaid Meter',
    type: 'Electricity',
    tagline: 'Industrial-Grade Power Metering',
    description:
      'Engineered for high-demand environments requiring three-phase power. Delivers precision metering for commercial and industrial loads, ensuring accurate billing for heavy-duty electrical consumption.',
    features: [
      '4-wire measurement system',
      'Phase balance monitoring',
      'Class 1 accuracy rating',
      'Power factor tracking',
      'Peak demand recording',
    ],
    idealFor: [
      'Retail outlets and shops',
      'Manufacturing facilities',
      'Corporate buildings',
      'Industrial parks',
    ],
    price: '17,000',
    image: '/products/3-phase-electric.avif',
    icon: HiLightningBolt,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
    popular: false,
  },
  {
    id: 'gas',
    name: 'Gas Prepaid Meter',
    type: 'Gas',
    tagline: 'Safe & Accurate Gas Metering',
    description:
      'Reliable prepaid metering for piped gas installations. Features a safety shutoff valve and precision diaphragm measurement for accurate billing and peace of mind in gas-connected properties.',
    features: [
      'Emergency safety valve',
      'Accurate diaphragm measurement',
      'Prepaid token compatibility',
      'Credit alert notifications',
      'Robust construction',
    ],
    idealFor: [
      'Gas-connected estates',
      'Residential gas compounds',
      'Centralized gas buildings',
    ],
    price: '17,000',
    image: '/products/gas-prepaid.avif',
    icon: HiFire,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    popular: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
