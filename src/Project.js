import React from 'react';
import './Project.css';

const Project = ({ type, content, image, description }) => (
  <figure className={`effect-ming project-card ${type}`}>
    <img src={image} alt={content} />
    <figcaption>
      <h2>{content}</h2>
      <p>{description}</p>
    </figcaption>
  </figure>
);

const ProjectList = () => {
  const projects = [
    { id: 2, type: 'type2', content: 'Music Player', image: 'MusicPlayer.png', description: 'A music player built with the MERN stack, enabling users to favorite songs and create playlists. It also supports adding songs to playlists and displays recently played tracks.' },
    { id: 1, type: 'type1', content: 'Online Food Ordering App', image: 'OnlineFoodDel.png', description: 'A food ordering app developed with Streamlit and MySQL. Users can view menu items and add food to their cart. The app simplifies the ordering process with a user-friendly interface.' },
    { id: 3, type: 'type3', content: 'Todo List', image: 'Todo.png', description: 'A task management app built with the MERN stack. Users can create, update, and delete tasks. It offers a seamless way to organize and track daily activities.' },
  ];

  return (
    <div className="project-container">
      <h2 className="project-heading">My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Project
            key={project.id} 
            type={project.type} 
            content={project.content} 
            image={project.image} 
            description={project.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList