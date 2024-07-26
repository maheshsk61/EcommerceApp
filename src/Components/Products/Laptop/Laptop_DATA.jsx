import { mobilesData } from "../Mobile/Mobile_DATA.jsx"
var id = mobilesData[mobilesData.length - 1].m_id
export var laptopsData = [
    {
        l_id: ++id,
        l_img: 'https://images.pexels.com/photos/1181462/pexels-photo-1181462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        l_name: 'Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Starlight',
        l_price: 104990,
        l_details: {
            processor: 'M3',
            memory: '8 GB RAM 512 GB SSD',
            storage: '256GB SSD',
            os: 'Mac OS',
            display: 'A BRILLIANT DISPLAY — The 34.46 cm (13.6″) Liquid Retina display supports 1 billion colours'
        }
    },
    {
        l_id: ++id,
        l_img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        l_name: 'Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop (16 GB RAM/512 GB SSD/Windows 11 Home) AL15-41, 39.62 cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 KG',
        l_price: 35990,
        l_details: {
            processor: 'AMD Ryzen 5 5500U Hexa-Core Mobile Processor with AMD Radeon Graphics',
            memory: 'RAM - 16 GB of Dual-channel DDR4, 2 SODIMM sockets',
            storage: '512 GB SSD NVMe solid-state drive storage (expandable up to 1TB) to store your files and media',
            os: 'Windows 11 Home',
            display: 'Experience sharp details and crisp colors on the 15.6" Full HD display, 16:9 aspect ratio, ultra-slim design and narrow bezels.'
        }
    },
    {
        l_id: ++id,
        l_img: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600',
        l_name: 'ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W',
        l_price: 19990,
        l_details: {
            processor: 'Intel Celeron N4020, 1.1 GHz base speed, Up to 2.8 GHz Turbo Speed, 2 cores, 2 Threads, 4MB Cache',
            memory: '4GB SO-DIMM DDR4 2400MHz RAM, Support up to 8GB using 1x SO-DIMM Slot with',
            storage: '256GB M.2 NVMe PCIe SSD',
            os: 'Windows 11 Home',
            display: '35.56 cm (14 Inch) 1920 x 1080 Pixel'
        }
    },
    {
        l_id: ++id,
        l_img: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        l_name: 'Lenovo V15 Intel Celeron N4500 15.6" (39.62 cm) FHD (1920x1080) Antiglare 250 Nits Thin and Light Laptop (8GB RAM/256GB SSD/Windows 11 Home/Black/1Y Onsite/1.7 kg), 82QYA00MIN',
        l_price: 20480,
        l_details: {
            processor: 'Intel Celeron N4500 processor, base speed 1.1 Ghz, max speed 2.8 Ghz, 2 Cores, 4MB L3 smart cache',
            memory: '8GB DDR4 RAM 2933 MHz, dual-channel capable',
            storage: '256GB SSD M.2 upgradable up to 512GB SSD',
            os: 'Preloaded Windows 11 Home SL with Lifetime Validity',
            display: '15.6" (39.62 cm) screen with (1920x1080) FHD Antiglare, 250 Nits display'
        }
    },
    {
        l_id: ++id,
        l_img: 'https://images.pexels.com/photos/3776438/pexels-photo-3776438.jpeg?auto=compress&cs=tinysrgb&w=600',
        l_name: 'Dell Inspiron 7420 2in1 Laptop, Intel Core i7-1255U Processor/16GB/512GB/14.0" (35.56cm) FHD+ WVA Touch 250 nits, Active Pen/Win 11 + MSO' + '21, 15 Month McAfee/Backlit KB + FPR/Platinum Silver',
        l_price: 69990,
        l_details: {
            processor: 'Intel Core i3 11th Gen',
            memory: '16GB, 2x8GB, DDR4, 3200MHz',
            storage: '512GB SSD',
            os: 'Windows 11 Home + Office H&S 2021 + 15 Months McAfee Antivirus',
            display: '14.0" FHD+ WVA Truelife Touch Narrow Border 250 nits'
        }
    },
    {
        l_id: ++id,
        l_img: 'https://images.pexels.com/photos/17706650/pexels-photo-17706650/free-photo-of-man-sitting-with-newspaper-over-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        l_name: 'HP Laptop 15, 12th Gen i3-1215U, 15.6-inch (39.6 cm), FHD, Anti-Glare, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Dual Speakers, (Win 11, MSO 2021, Silver, 1.69 kg), 15s-fy5006TU',
        l_price: 34990,
        l_details: {
            processor: 'Intel Core i3-1215U (up to 4.4 GHz with Intel Turbo Boost Technology, 10 MB L3 cache, 6 cores, 8 threads)',
            memory: '8 GB DDR4-3200 MHz RAM (1 x 8 GB)',
            storage: '512 GB PCIe NVMe M.2 SSD',
            os: 'Windows 11 Home Single Language |Microsoft Office Home & Student Edition 2021',
            display: '39.6 cm (15.6") diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 250 nits, 45% NTSC'
        }
    }
]