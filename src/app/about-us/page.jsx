import React from 'react'
import Image from 'next/image';
import ".//aboutUs.css"

export default function AboutUs() {
  return (
    <>
      <div className='about-us-container'>
        <div className="founder-container">
          <div className="container-5">
            <Image
              src={"/FounderPortrait.png"}
              alt={"/FounderSignature.png"}
              width={600}
              height={750}
              quality={100}
              className='sig-special'
            />
            <Image
              src={"/FounderSignature.png"}
              alt={"/FounderPortrait.png"}
              width={600}
              height={200}
              quality={100}
              className="sig-special"
            />
          </div>
          <div className='founder-description'>
            <h2>
              Justin Chin-Shan Yu, Democratic District Leader of 65AD
            </h2>
            <p className='paragraph-1'>
              Justin Chin-Shan Yu was born in 1945 in Chongqing, China. The family was originally from Manchuria and had taken up residence in Beijing. At the tender age of four, Justin and his family relocated to Taiwan because of the escalating Civil War in China. His mother is the late Cecilia Hsiu-Ya Chang, a renowned Chinese author with a writing career that spanned over 70 years. In 2001, she was honored by the US Congress. Justin is also the nephew of the late Cardinal Yu-pin, of blessed memory, Archbishop of Nanking.
            </p>
            <p className='paragraph-2'>
              In Taiwan, Justin earned a Bachelor of Arts degree in Economics from the National Taiwan University. In 1970, he immigrated to the United States to pursue his studies, earning a Master of Science degree from Pratt Institute in New York. He started to call Chinatown his home in 1977 after living in Jackson Heights, Flushing, Brooklyn and Fort Lee, NJ.
            </p>
            <p className='paragraph-3'>
              Justin had a distinguished 25-year career as a reporter and author. Working for the World Journal Daily, the largest Chinese Newspaper in North America, he specialized in immigration issues.
            </p>
            <p className='paragraph-4'>
              He authored several Chinese-language publications, including “The Key to Immigrating to the United States”, “The story of Sister Ping”,” Immigration to Canada” and “All Aspects of H1-B Visas”.
            </p>
            <p className='paragraph-5'>
              In 2006, Justin retired from the newspaper business but this in no way slowed down his love for and service to the community. He was so successful in this new role that he was recognized in 2011 by Leading Age, a national not-for-profit association that supports, enables and empowers people to live fully as they get older-as an Amazing American Senior. He was profiled in Washington, D.C.  in a high-profile, multimedia exhibit called Celebrate Age. As an activist of Senior Health Care, he was responsible for bringing health and wellness screenings, home visits, general social services, census registration activities and creative arts celebrations to Chinatown, earning the local title as the Mayor of Chinatown, a title he still holds.
            </p>
            <p className='paragraph-6'>
              Justin has been married to his wife, Lena.  They have two children and four grandchildren.
            </p>
            <big>
              Justin’s other civic accomplishments include:
            </big>
            <ul className='list-of-companies'>
              <li>Current President of the Chinese Consolidated Benevolent Association Chinese Community Center, Inc</li>
              <li>Current Chairperson of APAPA, NY</li>
              <li>Past President of Confucius Plaza Housing</li>
              <li>Founder of the Health Living Senior Program at Confucius Plaza</li>
              <li>Current Board Member of Sino-American Amity Fund</li>
              <li>Past Commissioner on New York City Districting Commission 2012-2013</li>
              <li>Past President of the CCBA (2008 – 2010 & 2020 – 2022)</li>
              <li>Past President of the Chinese Language Journalist Association</li>
              <li>Past Chair Person & President of the Chinese Chamber of Commerce</li>
              <li>Facilitator of the NORC (Naturally Occurring Retirement Community) at Confucius Plaza</li>
              <li>President Emeritus of the Lin Sing Association</li>
            </ul>
          </div>
        </div>
        <div>
          <big style={ {paddingLeft : "20px"} }>This information is directly sourced from the Chinese Consolidated Benevolent Association</big>
          <p style={ {paddingLeft : "20px"} }>
              <span>You can learn more by following this link: </span>
              <a href='https://www.ccbanyc.org/epresidentjustinyu.html' target='_blank' className='ccba-link'>
                https://www.ccbanyc.org/epresidentjustinyu.html
              </a>
            </p>
        </div>
      </div>
    </>
  );
}
