"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const Testimonial = [
    {
      quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. It transcends language and culture, resonating with the deepest parts of our being. Through its harmonies and melodies, music expresses emotions and stories that words alone cannot capture. It connects us to each other and to something greater than ourselves, evoking memories, stirring passions, and inspiring creativity. In the symphony of life, music is the universal language that speaks to o",
      title: "Plato",
      name: "Plato",
    },
    {
      quote: "Without music, life would be a mistake. It is the essence of existence, weaving through the fabric of our experiences and emotions. Music transcends time, bridging generations and cultures with its timeless melodies and rhythms. It speaks to the soul in ways that words cannot, expressing joy, sorrow, love, and longing with profound depth. In the silence between notes, we find meaning and connection, discovering truths about ourselves and the world. Music is not just sound; it is a jour",
      title: "Twilight of the Idols",
      name: "Friedrich Nietzsche",
    },
    {
      quote: "Where words fail, music speaks. It is the universal language of mankind, transcending boundaries and connecting hearts with its profound melodies and harmonies. Music has the power to heal, inspire, and uplift, carrying emotions and stories across generations. In its notes, we find solace, understanding, and a sense of belonging. Through music, we express our deepest joys, sorrows, hopes, and dreams, forging connections that defy distance and time. It is the soundtrack of our lives, shaping memories and moments with its timeless beauty.",
      title: "Hans Christian Andersen",
      name: "Hans Christian Andersen",
    },
    {
      quote: "Music is the divine way to tell beautiful, poetic things to the heart. It has the power to heal, inspire, and evoke emotions that words alone cannot express. Through its melodies and harmonies, music touches the deepest parts of our soul, resonating with the essence of life itself. It is a language without borders, speaking to all who listen with an open heart. In every note, we find beauty, meaning, and a connection to something greater than ourselves. Music is not just a sound; it is a symphony of the ",
      title: "Pablo Casals",
      name: "Pablo Casals",
    },
    {
      quote: "Music can change the world because it can change people. Its melodies and lyrics resonate deep within, shaping thoughts, emotions, and actions with profound impact. In times of joy, music amplifies our happiness; in moments of sorrow, it offers solace and understanding. Music unites us across differences, bridging cultures and generations with its universal language. It is a powerful force for change, inspiring compassion, empathy, and unity. Through music, we discover our shared humanity and the transformative",
      title: "Bono",
      name: "Bono",
    },
    {
      quote: "The only truth is music. It speaks to the core of our being, revealing emotions, thoughts, and dreams in ways that transcend language and culture. In its melodies, we find solace, inspiration, and a reflection of our deepest selves. Music is not just a sound; it is a journey, a story, and a connection to something greater than ourselves.",
      title: "Jack Kerouac",
      name: "Jack Kerouac",
    },
    {
      quote: "Music is the strongest form of magic. It has the power to transport us to different worlds, evoke memories, and stir emotions that defy explanation. In its harmonies and rhythms, we find solace, inspiration, and a connection to something greater than ourselves. Music is a universal language that transcends boundaries, bringing people together and igniting the spark of creativity and imagination.",
      title: "Marilyn Manson",
      name: "Marilyn Manson",
    },
    {
      quote: "Music in the soul can be heard by the universe. It resonates within us, connecting us to the cosmos and expressing the ineffable essence of existence. In its melodies, we find beauty, meaning, and a reflection of the infinite mysteries that surround us. Music is not just a sound; it is a language of the soul, a symphony of the universe, and a testament to the boundless creativity of life.",
      title: "Lao Tzu",
      name: "Lao Tzu",
    },
    {
      quote: "Life is like a beautiful melody, only the lyrics are messed up. Despite the chaos, music brings harmony and meaning, transforming life's discord into a symphony. In its rhythms, we find order, beauty, and a reflection of the human experience. Music is not just a sound; it is a journey of discovery, expression, and connection to the world around us.",
      title: "Hans Christian Andersen",
      name: "Hans Christian Andersen",
    },
    {
      quote: "After silence, that which comes nearest to expressing the inexpressible is music. Its melodies echo the mysteries of existence, offering glimpses into the profound truths of our world. In its harmonies, we find unity, beauty, and a connection to the eternal rhythms of life. Music is not just a sound; it is a symphony of the universe, resonating with the pulse of creation.",
      title: "Aldous Huxley",
      name: "Aldous Huxley",
    },
  ];
  

function TEstimonialCards() {
    return (
        <div className="text-center mt-4 h-[40rem] flex-col w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <h1 className="md:text-4xl font-bold text-3xl mb-6">Hear Our Haramony : Voice of success</h1>
            <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className=" w-full max-w-6xl">
                <InfiniteMovingCards
                    items={Testimonial}
                    direction="right"
                    speed="slow"
                />
            </div>
            </div>
        </div>
    )
}

export default TEstimonialCards
