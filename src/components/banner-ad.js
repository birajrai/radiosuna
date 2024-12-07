import { useState, useEffect } from 'react'
import Image from 'next/image'

export function BannerAd() {
    const [ad, setAd] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchAd() {
            try {
                const response = await fetch('/api/ads')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json()
                console.log('Received ad data:', data)
                const enabledAds = data.ads.filter(ad => ad.enabled)
                if (enabledAds.length > 0) {
                    const randomAd = enabledAds[Math.floor(Math.random() * enabledAds.length)]
                    setAd(randomAd)
                } else {
                    console.log('No enabled ads found')
                }
            } catch (error) {
                console.error('Error fetching ad:', error)
                setError(error.message)
            }
        }

        fetchAd()
    }, [])

    if (error) {
        return <div className="w-full max-w-[728px] h-[90px] mx-auto my-8 bg-gray-200 flex items-center justify-center text-gray-500">Ad unavailable</div>
    }

    if (!ad) return null

    return (
        <div className="w-full max-w-[2048px] mx-auto my-4 md:my-8">
            <a
                href={ad.ad_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
            >
                <img
                    src={ad.image_url}
                    alt={ad.name}
                    width={2048}
                    height={120}
                    className="w-full h-auto object-cover"
                    style={{
                        maxHeight: '120px',
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </a>
        </div>
    )
}
