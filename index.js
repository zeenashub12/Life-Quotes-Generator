const quotes = [
    
"Life is what happens when you're busy making other plans — John Lennon." ,
"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment — Buddha." ,
"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well — Ralph Waldo Emerson." ,
"In three words I can sum up everything I've learned about life: it goes on — Robert Frost." ,
"To live is the rarest thing in the world. Most people exist, that is all — Oscar Wilde." ,
"Life isn't about finding yourself. Life is about creating yourself — George Bernard Shaw." ,
"You have within you right now, everything you need to deal with whatever the world can throw at you — Brian Tracy." ,
"The best time to plant a tree was 20 years ago. The second best time is now — Chinese Proverb." ,
"The only impossible journey is the one you never begin — Tony Robbins." ,
"Life is really simple, but we insist on making it complicated — Confucius." ,
"Life is 10% what happens to us and 90% how we react to it — Charles R. Swindoll." ,
"The biggest adventure you can take is to live the life of your dreams — Oprah Winfrey." ,
"Life is short, and it is up to you to make it sweet — Sarah Louise Delany." ,
"Good friends, good books, and a sleepy conscience: this is the ideal life— Mark Twain." ,
"The unexamined life is not worth living — Socrates." ,
"The purpose of life is to contribute in some way to making things better — Robert F. Kennedy." ,
"Life is a journey that must be traveled no matter how bad the roads and accommodations — Oliver Goldsmith." ,
"Don't cry because it's over, smile because it happened — Dr. Seuss." ,
"Life is either a daring adventure or nothing at all — Helen Keller." ,
 

]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}