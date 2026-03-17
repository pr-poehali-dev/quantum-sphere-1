export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">НЕЙРО*ДРУЗЬЯ</div>
        <nav>
          <a href="#">Рубрики</a>
          <a href="#">О нас</a>
          <a href="#">Инструменты</a>
          <a href="#">Сообщество</a>
        </nav>
        <a
          href="https://vk.com/neuro_friends"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          Вступить в ВК
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЕЗ СКУКИ,
              <br />
              ТОЛЬКО <span>НЕЙРО</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Сообщество ВКонтакте, где нейросети — это вкусно и полезно. Обзоры инструментов, лайфхаки и живое общение с теми, кто тоже в теме.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="https://vk.com/neuro_friends"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
              >
                Вступить бесплатно
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть рубрики
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/d357ecae-e6ec-46d7-8b7d-1b0974681297/files/92f42815-832a-43d5-9a66-63cbec70cfc5.jpg")`,
            }}
          >
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #НЕЙРОСЕТИ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              🔥 ВАЙБ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * CHATGPT * MIDJOURNEY * CLAUDE * SORA * GEMINI * НЕЙРО-ЛАЙФХАКИ * AI-ИНСТРУМЕНТЫ * ПРОМПТЫ * ОБЗОРЫ *
            CHATGPT * MIDJOURNEY * CLAUDE * SORA * GEMINI * НЕЙРО-ЛАЙФХАКИ * AI-ИНСТРУМЕНТЫ * ПРОМПТЫ * ОБЗОРЫ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ТОП РУБРИКИ</h2>
            <a
              href="https://vk.com/neuro_friends"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все посты →
            </a>
          </div>

          <div className="menu-grid">
            {/* Card 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит недели</span>
              <img
                src="https://cdn.poehali.dev/projects/d357ecae-e6ec-46d7-8b7d-1b0974681297/files/9848884d-708b-42e7-a2df-ee8d7a192e04.jpg"
                alt="Обзоры инструментов"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Обзоры AI-инструментов</h3>
                  <span className="price">🔥</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Честные разборы ChatGPT, Midjourney, Claude и других — что реально работает, а что хайп.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Практика
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d357ecae-e6ec-46d7-8b7d-1b0974681297/files/d5a7108a-e3a8-45a0-bb92-99726cd5494b.jpg"
                alt="Промпты и лайфхаки"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Промпты и лайфхаки</h3>
                  <span className="price">💡</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Готовые промпты, которые экономят часы работы. Берёшь и пользуешься.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Тренды
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d357ecae-e6ec-46d7-8b7d-1b0974681297/files/92f42815-832a-43d5-9a66-63cbec70cfc5.jpg"
                alt="Новинки AI"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Новинки и новости AI</h3>
                  <span className="price">🚀</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Что вышло, что взорвало интернет и почему это важно — без лишней воды.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто постим про нейросети. Мы создаём комьюнити, где каждый — от новичка до эксперта — чувствует себя своим. Живые обсуждения, мемы, разборы и поддержка. Заходи без пароля, просто с интересом.
            </p>
            <a
              href="https://vk.com/neuro_friends"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white", borderColor: "white", display: "inline-block" }}
            >
              Вступить в сообщество
            </a>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @НЕЙРО_ДРУЗЬЯ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="AI арт"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Нейросеть"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1675557009285-b56e5b7e5a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="AI генерация"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Технологии"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">НЕЙРО*ДРУЗЬЯ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Сообщество ВКонтакте о нейросетях, AI-инструментах и технологиях будущего. Вкусно, полезно и без занудства.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Рубрики
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Инструменты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="https://vk.com/neuro_friends" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                ВКонтакте
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы активности</h4>
          <ul>
            <li>Пн — Пт: 09:00 — 22:00</li>
            <li>Сб — Вс: 10:00 — 20:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 800 }}>
              Посты каждый день!
            </li>
          </ul>
        </div>
        <div>
          <p style={{ color: "#666", fontSize: "14px" }}>© 2024 Нейро-друзья. Все права защищены.</p>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "5px" }}>Сделано с ❤️ и нейросетями</p>
        </div>
      </footer>
    </>
  );
}
