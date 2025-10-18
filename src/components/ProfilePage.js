import React from 'react';
import { User } from 'lucide-react';

function ProfilePage() {
  return (
    <div className="page-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={100} />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">Carrie Haber</h2>
            <p className="profile-title">Registered Physiotherapist</p>
            <p className="profile-detail"><strong>Credentials:</strong> BSc PT, MSc, FCAMPT</p>
            <p className="profile-detail"><strong>Experience:</strong> 15+ years</p>
          </div>
        </div>

        <div className="profile-content">
          <section className="profile-section">
            <h3 className="section-title">About Carrie</h3>
            <p className="section-text">
              Carrie Haber is a dedicated physiotherapist with over 15 years of experience helping 
              clients achieve their health goals through evidence-based treatment and personalized care.
            </p>
          </section>

          <section className="profile-section">
            <h3 className="section-title">Areas of Expertise</h3>
            <ul className="expertise-list">
              <li>Sports injury treatment</li>
              <li>Post-operative rehabilitation</li>
              <li>Manual therapy</li>
              <li>Chronic pain management</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;