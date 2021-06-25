DROP TABLE IF EXISTS issues;

CREATE TABLE issues (
  issue_type VARCHAR(30),
  priority VARCHAR(30),
  summary VARCHAR(200),
  status VARCHAR(30),
  assigned_to VARCHAR(40)
);

INSERT INTO issues (issue_type, priority, summary, status, assigned_to) VALUES
('Front End', 'low', 'The Add to Cart button is placed too much to the left', 'open', 'Bob Smith'),
('Database', 'high', 'The data is not being posted to the database', 'open', 'George Zhang');