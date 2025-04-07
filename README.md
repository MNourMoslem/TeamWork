# Project Management Application

## Project Overview
This application is designed to facilitate project management by providing tools for task organization, team collaboration, issue tracking, and file management. It helps teams streamline workflows, improve productivity, and track project progress efficiently.

## 🎯 Objectives
- Provide a **user-friendly** platform for project management.
- Support **task assignment**, tracking, and collaboration.
- Offer **cloud-based storage** for file attachments.
- Ensure **efficient user management** with role-based access.
- Support **multi-platform access** via web and mobile applications.


## Use Case Scenarios
### 1. **Project Creation and Management**
   - A user (Project Owner) creates a new project by specifying a title, description, and team members.
   - The owner assigns roles to members (e.g., admin, member, guest).
   - The project progresses through different stages (e.g., Planning, In Progress, Completed).

### 2. **Task Assignment and Tracking**
   - The project owner or team members create tasks, define priorities, and assign responsible members.
   - Users update task statuses (e.g., To Do, In Progress, Done).
   - Tasks have deadlines and may be linked to issues for better tracking.

### 3. **Issue Reporting and Resolution**
   - Users report issues related to specific tasks or projects.
   - Issues can be assigned to specific members or left open for all team members to respond.
   - Team members provide responses or solutions, and the issue is marked as resolved once completed.

### 4. **File Management System (ASS - Application Storage System)**
   - Users upload and attach files to projects or tasks.
   - Files are stored in a cloud storage service.
   - Access permissions ensure that only relevant team members can view or download files.

### 5. **Collaboration and Communication (ACS - Application Communication System)**
   - Users can comment on tasks and issues for better collaboration.
   - A chat system allows real-time discussions.
   - Future updates may include voice and video calls.

### 6. **AI Assistance (AAIA - Application AI Assistance)**
   - AI suggestions for task prioritization.
   - AI-based summarization of project progress.
   - Automated reminders and notifications.

## Project Workflow
1. Users register and log in.
2. Projects are created with team members assigned.
3. Tasks and issues are added, with real-time updates and notifications.
4. Files are uploaded and managed securely.
5. AI assistance helps optimize workflow efficiency.

## 📂 Database Schema
### **User Table**
| Field      | Type       | Description              |
|------------|------------|--------------------------|
| _id        | ObjectId   | Unique identifier        |
| name       | String     | User's full name         |
| email      | String     | Unique email address     |
| password   | String     | Hashed password          |
| projects   | [ObjectId] | projects                 |
| created_at | Date       | Creation Date            |
| updated_at | Date       | Update Date              |


### **Project Table**
| Field       | Type       | Description                   |
|-------------|------------|-------------------------------|
| _id         | ObjectId   | Unique project identifier     |
| owner       | ObjectId   | Reference to the project owner|
| title       | String     | Project title                 |
| short_desc  | String     | Short description             |
| long_desc   | String     | Detailed description          |
| members     | [ObjectId] | List of assigned members      |
| tasks       | [ObjectId] | List of associated tasks      |
| stage       | String     | Project status/stage          |
| files       | [String]   | Attached file URLs            |
| created_at  | Date       | Creation Date                 |
| target_date | Date       | Target Date                   |
| update_at   | Date       | Update Date                   |


### **Task Table**
| Field      | Type       | Description                     |
|------------|------------|---------------------------------|
| _id        | ObjectId   | Unique task identifier          |
| title      | String     | Task title                      |
| desc       | String     | Task description                |
| members    | [ObjectId] | Assigned members                |
| priority   | String     | Task priority (low/medium/high) |
| files      | [String]   | Attached file URLs              |
| created_at | Date       | Creation Date                   |
| updated_at | Date       | Update Date                     |


### **Issue Table**
| Field          | Type       | Description                  |
|----------------|------------|------------------------------|
| _id            | ObjectId   | Unique task identifier       |
| owner          | ObjectId   | Issue Publisher              |
| task_id        | ObjectId   | Task Publisher               |
| _id            | ObjectId   | Unique task identifier       |
| title          | String     | Issue title                  |
| desc           | String     | Issue description            |
| target_members | [ObjectId] | Assigned members             |
| responses      | [Object]   | Responses                    |
| created_at     | Date       | Creation Date                |
| updated_at     | Date       | Update Date                  |


### **File Table**
| Field           | Type       | Description                  |
|-----------------|------------|------------------------------|
| _id             | ObjectId   | Unique task identifier       |
| owner           | ObjectId   | File Publisher User          |
| task_id         | ObjectId   | Task Publisher               |
| project_id      | ObjectId   | Task Publisher               |
| filename        | String     | Issue title                  |
| file_url        | String     | Issue description            |
| target_members  | [ObjectId] | Assigned members             |
| responses       | [Object]   | Responses                    |
| uploaded_at     | Date       | Update Date                  |

## 📌 Features
### **User Management**
- Users can register and log in.
- Role-based access for **admins** and **members**.

### **Project Management**
- Create, update, and delete projects.
- Assign team members.
- Track project stages.

### **Task Management**
- Create tasks with priorities.
- Assign tasks to users.
- Track task progress.

### **File Management**
- Upload and attach files to projects and tasks.
- Secure cloud storage integration.

## 📌 API Endpoints
### **User Routes**
- `POST /api/users/register` – Register a new user.
- `POST /api/users/login` – Authenticate user.
- `GET /api/users/profile` – Get user details.

### **Project Routes**
- `POST /api/projects` – Create a new project.
- `GET /api/projects` – Fetch all projects.
- `GET /api/projects/:id` – Get project details.
- `PUT /api/projects/:id` – Update project details.
- `DELETE /api/projects/:id` – Delete a project.

### **Task Routes**
- `POST /api/tasks` – Create a new task.
- `GET /api/tasks` – Fetch all tasks.
- `GET /api/tasks/:id` – Get task details.
- `PUT /api/tasks/:id` – Update task details.
- `DELETE /api/tasks/:id` – Delete a task.

### **File Management Routes**
- `POST /api/files/upload` – Upload a file.
- `GET /api/files/:id` – Get file details.
- `DELETE /api/files/:id` – Delete a file.