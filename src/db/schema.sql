-- PostgreSQL/Supabase-ready schema for SolveSphere
create extension if not exists pgcrypto;
create type user_role as enum ('Citizen','Student','Mentor','Admin');
create type challenge_status as enum ('Open','Under review','In progress','Submitted','Resolved','Denied');
create type priority_level as enum ('Low','Medium','High','Critical');
create table if not exists profiles (id uuid primary key default gen_random_uuid(), name text not null, email text unique not null, role user_role not null default 'Citizen', avatar_url text, created_at timestamptz not null default now());
create table if not exists challenges (id uuid primary key default gen_random_uuid(), title text not null, description text not null, category text not null, location text not null, status challenge_status not null default 'Open', priority priority_level not null default 'Medium', owner_id uuid references profiles(id), readiness int not null default 0 check (readiness between 0 and 100), created_at timestamptz not null default now());
create table if not exists teams (id uuid primary key default gen_random_uuid(), name text not null, challenge_id uuid references challenges(id) on delete cascade, owner_id uuid references profiles(id), created_at timestamptz not null default now());
create table if not exists team_members (team_id uuid references teams(id) on delete cascade, user_id uuid references profiles(id) on delete cascade, joined_at timestamptz not null default now(), primary key(team_id,user_id));
create table if not exists solutions (id uuid primary key default gen_random_uuid(), title text not null, description text, team_id uuid references teams(id) on delete cascade, status text not null default 'Draft', feedback text default '', submitted_at timestamptz, reviewed_at timestamptz);
create table if not exists challenge_media (id uuid primary key default gen_random_uuid(), challenge_id uuid references challenges(id) on delete cascade, url text not null, media_type text not null check(media_type in ('image','video')), created_at timestamptz not null default now());
create table if not exists notifications (id uuid primary key default gen_random_uuid(), user_id uuid references profiles(id) on delete cascade, title text not null, body text not null, read boolean not null default false, created_at timestamptz not null default now());
create index if not exists challenges_status_idx on challenges(status);
create index if not exists challenges_priority_idx on challenges(priority);
create index if not exists solutions_status_idx on solutions(status);
