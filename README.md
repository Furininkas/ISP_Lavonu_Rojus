# UAB Lavonų rojus

Backend: ASP.NET Core Web API (.NET 8, C#), EF Core, PostgreSQL.
Frontend: Next.js + TypeScript.
MVC: Model = `backend/Models`, Controller = `backend/Controllers`, View = `frontend/app`.

---

# Part 1: Every day

## Start working

**Step 1. Start Docker Desktop.**
Open it from the Start menu and wait until it says **"Engine running"** (bottom left, green). This can take a minute.

**Step 2. Open a terminal in the project folder.**
Open the `lavonu-rojus` folder in VS Code (or any editor) and open its terminal. Or open PowerShell and `cd` into the folder.

**Step 3. Get the latest code.**
```
git pull
```

**Step 4. Start the database.**
```
docker compose up -d
```

**Step 5. Start the backend.** Keep this terminal open.
```
cd backend
dotnet run
```
Wait until you see `Now listening on: http://localhost:5000`.

**Step 6. Start the frontend.** Open a **second** terminal. Keep it open.
```
cd frontend
npm install
npm run dev
```

**Step 7. Open the site.**

| What | Link |
|------|------|
| Website | http://localhost:3000 |
| Backend check (should say `ok`) | http://localhost:5000/api/health |
| Test your endpoints | http://localhost:5000/swagger |

## Stop working

1. In both terminals press `Ctrl + C`.
2. (Optional) stop the database: `docker compose down`

Your data is kept. It is only deleted if you run `docker compose down -v`.

## Saving your work to GitHub

Never work directly on `main`. Make your own branch.

```
git checkout -b feature/your-area-name
```

When you want to save your work:
```
git add .
git commit -m "short description of what you did"
git push -u origin feature/your-area-name
```
Then open GitHub and create a **Pull Request**. When it is approved, it goes into `main`.

Before you start a new task:
```
git checkout main
git pull
git checkout -b feature/new-task-name
```

## Where do I put my code?

| I am making... | Put it in |
|----------------|-----------|
| An endpoint (API) | `backend/Controllers/` |
| Business logic | `backend/Services/` |
| A page people see | `frontend/app/` |
| A new database table | `backend/Models/` (see below) |

## I changed a database table. What now?

Only needed if you edit something in `backend/Models/`.

1. `git pull` first.
2. Make your change in the model.
3. In the `backend` folder run:
   ```
   dotnet ef migrations add NameOfYourChange
   ```
4. Start the backend (`dotnet run`). The table updates itself.
5. Commit and push **immediately**, including the new files in `backend/Data/Migrations/`.
6. If you get a conflict in Migrations: delete your migration with `dotnet ef migrations remove`, run `git pull`, and create it again.

When a teammate added a migration, you just `git pull` and `dotnet run`. The database updates itself.

## Photos

- Photos are **not** saved in git.
- The database only stores the path to the photo (the `Nuotrauka` column).
- Uploaded photos go to `backend/wwwroot/uploads/` and stay only on your computer.
- If a product has no photo, show a placeholder picture.
- Logo and icons go in `frontend/public/` and those are saved in git.

---

# Part 2: First-time installation

Do this **once** on your computer.

## Step 1. Install these programs

| Program | Version | Link |
|---------|---------|------|
| Git | any | git-scm.com |
| Node.js | 20 or newer (LTS) | nodejs.org |
| .NET SDK | **8** (not 9 or 10) | dotnet.microsoft.com/download/dotnet/8.0 |
| Docker Desktop | any | docker.com |

Restart your PC after installing everything.

## Step 2. Windows only: install WSL (needed by Docker)

Open **PowerShell as administrator** (right click, Run as administrator):
```
wsl --update
wsl --install
```
Then **restart your PC**.

Then start Docker Desktop and wait for "Engine running".

## Step 3. Check everything is installed

Open a **new** PowerShell window and run:
```
git --version
node --version
dotnet --list-runtimes
docker --version
```
In the `dotnet` list you must see a line with `Microsoft.AspNetCore.App 8.0.x`. If you only see 9.x or 10.x, install the .NET 8 SDK from the link above and open a new terminal.

## Step 4. Install the database tool (once)

```
dotnet tool install --global dotnet-ef --version 8.0.10
```

## Step 5. Download the project

```
git clone <repo-url>
cd lavonu-rojus
```

## Step 6. Install the frontend packages

```
cd frontend
npm install
cd ..
```

## Step 7. First start

```
docker compose up -d
cd backend
dotnet run
```
Then in a second terminal:
```
cd frontend
npm run dev
```
Open http://localhost:3000.