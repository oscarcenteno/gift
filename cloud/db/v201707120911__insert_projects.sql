-- Test Data for t_portfolio
INSERT INTO t_portfolio(portfolio_id, portfolio_name)
VALUES (1,'BXII');

INSERT INTO t_portfolio(portfolio_id, portfolio_name)
VALUES (11,'BAAM');

INSERT INTO t_portfolio(portfolio_id,portfolio_name)
VALUES (21,'GIR');

INSERT INTO t_portfolio(portfolio_id, portfolio_name)
VALUES (31, 'Awesome Projects');

INSERT INTO t_portfolio(portfolio_id, portfolio_name)
VALUES (41, 'Portfolio With no Projects');

-- Test Data for t_project
INSERT INTO t_project(project_id, project_name, portfolio_id)
VALUES (1,'Phoenix', 1);

INSERT INTO t_project(project_id, project_name, portfolio_id)
VALUES (11,'A-Team', 11);

INSERT INTO t_project(project_id,project_name, portfolio_id)
VALUES (21,'Operation metrics', 21);

INSERT INTO t_project(project_id, project_name, portfolio_id)
VALUES (31, 'Exceptional Project', 31);

INSERT INTO t_project(project_id,project_name, portfolio_id)
VALUES (41,'Appraisal tool', 31);
