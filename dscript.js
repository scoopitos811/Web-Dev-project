const clubDetails = {
    robotics: {
      title: "Robotics Club",
      description: "A robotics club offers students a platform to explore and innovate in the field of robotics. Members collaborate on projects, participate in competitions, and gain hands-on experience with designing, building, and programming robots. The club fosters creativity, problem-solving skills, and teamwork, providing a practical understanding of engineering and technology. It also serves as a networking hub, connecting students with industry professionals and like-minded peers. Through workshops, seminars, and events, the robotics club enhances learning and prepares students for careers in robotics, automation, and related fields. It's a dynamic environment where passion for technology meets real-world application."
    },
    cultural: {
      title: "Cultural Club",
      description: "A cultural club serves as a vibrant hub for students to celebrate and explore diverse traditions, arts, and customs. It provides a platform for students from various backgrounds to share their heritage through events, festivals, and performances. The club fosters inclusivity, understanding, and appreciation of different cultures, enriching the campus experience. Members can participate in activities like dance, music, drama, and culinary arts, promoting creativity and collaboration. By organizing cultural exchanges and workshops, the club helps students develop a global perspective and build lasting friendships. It's a dynamic space where diversity is celebrated and cultural awareness is nurtured."
    },
    music: {
      title: "Music Club",
      description: "A music club provides a vibrant space for students to explore and express their musical talents. It brings together individuals with a shared passion for music, offering opportunities to learn, perform, and collaborate. Members can participate in various activities such as jam sessions, concerts, workshops, and competitions. The club fosters creativity, teamwork, and cultural exchange, enhancing the overall college experience. It also serves as a platform for budding musicians to showcase their skills and gain confidence. By promoting a love for music, the club contributes to the cultural richness and diversity of the campus community."
    },
    environment: {
      title: "Environment Club",
      description: "An environment club is a dynamic platform for students passionate about sustainability and environmental conservation. It aims to raise awareness about ecological issues and promote eco-friendly practices on campus and beyond. Members engage in activities such as tree planting, recycling drives, clean-up campaigns, and educational workshops. The club fosters a sense of responsibility towards the planet and encourages students to adopt sustainable lifestyles. By collaborating with local communities and organizations, the environment club also works on larger projects like habitat restoration and conservation efforts. It's a space where students can make a tangible impact on the environment while developing leadership and teamwork skills."
    },
    technical: {
      title: "Technical Club",
      description: "A technical club serves as a hub for students passionate about technology and innovation. It provides a platform for members to explore various fields such as coding, robotics, electronics, and more. The club organizes workshops, hackathons, and seminars to enhance technical skills and knowledge. Members collaborate on projects, participate in competitions, and stay updated with the latest technological trends. The club fosters a culture of learning, creativity, and problem-solving, preparing students for careers in tech industries. It's a space where like-minded individuals can share ideas, develop new skills, and work on cutting-edge technologies."
    },
    sports: {
      title: "Sports Club",
      description: "A sports club provides a vibrant environment for students to engage in physical activities and sports. It promotes fitness, teamwork, and healthy competition among members. The club organizes various sports events, tournaments, and training sessions, catering to different interests such as football, basketball, cricket, and more. It also encourages students to develop leadership and organizational skills by participating in club management and event planning. By fostering a sense of community and camaraderie, the sports club enhances the overall college experience, helping students maintain a balanced lifestyle and build lifelong friendships through shared athletic pursuits."
    }
  };
  
  function showDetails(club) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
  
    title.textContent = clubDetails[club].title;
    description.textContent = clubDetails[club].description;
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  