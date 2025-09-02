@Entity
@Table(name = "PROJECTS")
@Data
public class Project {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String githubUrl;
}