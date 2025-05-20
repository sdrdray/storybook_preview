import React from 'react';
import './ImageCard.css';

interface ImageCardProps {
  profileImage: string;
  backgroundImage: string;
  name: string;
  job: string;
  bio: string;
  date: string;
  category: string;
  effect?: 'blur' | 'color' | 'default';
  onSave?: () => void;
  isSaved?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  profileImage,
  backgroundImage,
  name,
  job,
  bio,
  date,
  category,
  effect = 'default',
  onSave,
  isSaved = false
}) => {
  return (
    <div className="card" data-effect={effect}>
      <button 
        className={`card__save ${isSaved ? 'active' : ''}`}
        onClick={onSave}
      >
        <i className="fas fa-bookmark"></i>
      </button>
      
      <div className="card__image">
        <img src={backgroundImage} alt="Background" />
      </div>
      
      <div className="card__header">
        <div className="card__profile">
          <img src={profileImage} alt={name} />
        </div>
      </div>
      
      <div className="card__body">
        <h2 className="card__name">{name}</h2>
        <span className="card__job">{job}</span>
        <p className="card__bio">{bio}</p>
      </div>
      
      <div className="card__footer">
        <span className="card__date">{date}</span>
        <span className="card__category">{category}</span>
      </div>
    </div>
  );
};

export default ImageCard; 