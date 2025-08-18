import { useRef, useEffect } from 'react';
import './index.css';
export default () => {
  const ref = useRef([]);
  useEffect(() => {
    debugger;
    console.log(ref);
    const refs = ref.current;

    function setIsVisible(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }
    const observer = new IntersectionObserver(setIsVisible, { threshold: 0.9 });
    debugger;
    if (refs.length > 0) {
      refs.forEach(item => {
        observer.observe(item);
      });
    }
  }, []);
  const addIndiRef = node => ref.current.push(node);
  return (
    <div className='scroll-spy'>
      <p ref={addIndiRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto
        rerum molestias non modi. Dolore illo excepturi tempore. Qui rerum velit
        labore quae autem amet totam ab itaque laudantium dolorem?
      </p>
      <p ref={addIndiRef}>
        Sapiente voluptatum, exercitationem iusto sit quae quis corporis porro
        qui nulla voluptate nemo eaque error, labore atque alias, possimus
        recusandae magnam dolores corrupti necessitatibus. Maiores eum
        doloremque porro autem nemo!
      </p>
      <p ref={addIndiRef}>
        Explicabo veritatis earum nulla modi deserunt sunt quibusdam nisi animi
        consequatur ipsum inventore expedita, est fugiat nesciunt suscipit
        consequuntur maiores soluta, iusto pariatur. Fugit vitae porro
        asperiores nesciunt aperiam corrupti.
      </p>
      <p ref={addIndiRef}>
        Dolorem omnis et possimus incidunt asperiores eaque enim quidem
        molestiae laboriosam aut pariatur nobis ducimus ipsam quam dolorum
        aperiam, cumque est excepturi maiores temporibus minima laborum odio!
        Accusantium, iste laborum.
      </p>
      <p ref={addIndiRef}>
        Aliquid placeat itaque accusantium ea illo saepe ratione minus inventore
        hic sint, nostrum nobis repellendus doloribus earum iste dolorum cumque
        adipisci. Rem praesentium odit facilis libero. Delectus, quidem?
        Perferendis, fugiat?
      </p>
      <p ref={addIndiRef}>
        Saepe voluptas placeat, labore ex perspiciatis harum quam voluptate
        magni et excepturi itaque quod ipsa reiciendis illo iusto error
        cupiditate consequatur ut fugit, totam mollitia. Rerum ratione vel
        temporibus at?
      </p>
      <p ref={addIndiRef}>
        Temporibus error rem quam veritatis ad, est natus, dicta tenetur eos,
        minus asperiores exercitationem. Laborum porro asperiores illum tempora
        totam, esse dignissimos, eum, ad nostrum minima nesciunt ex iusto
        distinctio!
      </p>
      <p ref={addIndiRef}>
        Doloremque accusamus aspernatur perferendis fuga similique
        exercitationem? Dolor asperiores odio ad, alias necessitatibus sit
        voluptatibus at officiis rerum esse officia perferendis cumque
        consequuntur nulla explicabo eius obcaecati eum iusto excepturi?
      </p>
      <p ref={addIndiRef}>
        Quasi quod distinctio maiores labore natus! Quas, esse eveniet neque
        unde debitis molestiae ea cumque harum vero inventore voluptas deserunt
        architecto delectus repellendus quasi pariatur similique amet?
        Asperiores, expedita officia.
      </p>
      <p ref={addIndiRef}>
        Magnam minima delectus reiciendis officia facere ut, voluptate, nemo
        voluptas accusantium odit molestias beatae ipsam quaerat, accusamus quo!
        Expedita adipisci natus veniam ex at tempora inventore magnam voluptatem
        magni ipsam!
      </p>
    </div>
  );
};
