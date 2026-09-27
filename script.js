function toggleMenu(){
      const links=document.querySelector('.navlinks');
      const open=links.style.display==='flex';
      links.style.display=open?'none':'flex';
      links.style.flexDirection='column';
      links.style.position='absolute';
      links.style.top='68px';
      links.style.left='0';
      links.style.right='0';
      links.style.padding='20px';
      links.style.background='var(--bg)';
      links.style.borderBottom='1px solid var(--line)';
    }
    function sendForm(e){
      e.preventDefault();
      const name=document.getElementById('name').value;
      const phone=document.getElementById('phone').value;
      const service=document.getElementById('service').value;
      const message=document.getElementById('message').value;
      const text=`Olá! Meu nome é ${name}. Tenho interesse em ${service}. Poderia me dar mais detalhes ?`;
      const whatsapp='5515997085761';
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`,'_blank');
    }
