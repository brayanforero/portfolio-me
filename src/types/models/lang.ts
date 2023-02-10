export interface Navigation {
  home: string;
  projects: string;
  aboutMe: string;
  cv: string;
}
export interface Hero {
  title: string;
  description: string;
}
export interface Experience {
  title: string;
  copy: string;
}
export interface AboutSection {
  title: string;
  copy?: string[] | null;
}
export interface Contact {
  title: string;
}

export interface AppLangConfig {
  navigation: Navigation;
  hero: Hero;
  experience: Experience;
  aboutSection: AboutSection;
  contact: Contact;
}
