import React from 'react'


function WelcomeSection() {

  return (
    <section className="banner welcome-banner">
        <div className="split-panel left welcome-panel">
          <h1 className="welcome-title">
            The Met
          </h1>
          <div className="section-divider">

          </div>
          <div className="welcome-text">
            Explore over 5,000 years of art from around the world.
          </div>

        </div>
        <div className="split-panel">
          <img
            className="welcome-image"
            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/436535/796067/main-image" alt="Wheat Field with Cypresses (1889) - Vincent van Gogh" />
        </div>

    </section>
  )
}

export default WelcomeSection