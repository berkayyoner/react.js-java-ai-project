import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, createProject } from "../../slices/projectSlice";
import NavBar from "../../components/NavBar/NavBar";

function Projects() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.projects);

  // Yeni proje ekleme için state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  // Sayfa açıldığında projeleri yükle
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleAddProject = () => {
    if (!title.trim()) {
      alert("Başlık boş olamaz!");
      return;
    }
    dispatch(createProject({ title, description, githubUrl }));
    setTitle("");
    setDescription("");
    setGithubUrl("");
  };

  if (loading) return (
    <div>
      <NavBar selectedButton="projects" />
      <p>Yükleniyor...</p>
    </div>
  );

  return (
    <div>
      <NavBar selectedButton="projects" />
      <h1>Projelerim</h1>

      {/* Proje ekleme formu */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Yeni Proje Ekle</h3>
        <input
          type="text"
          placeholder="Proje Başlığı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Açıklama"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Github URL"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddProject}>Ekle</button>
      </div>

      {/* Projeleri listeleme */}
      <ul>
        {list.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.description}{" "}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noreferrer">
                [Github]
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
