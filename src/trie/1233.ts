class Folder {
  children: Map<string, Folder>;
  isFinal: boolean;

  constructor() {
    this.children = new Map<string, Folder>();
    this.isFinal = false;
  }

  insert(path: string) {
    let current: Folder = this;
    for (let name of path.slice(1).split("/")) {
      let child: Folder | undefined = current.children.get(name);
      if (!child) {
        child = new Folder();
        current.children.set(name, child);
      }

      current = child;
    }

    current.isFinal = true;
  }

  insertFolders(folders: string[]) {
    folders.forEach((path) => {
      this.insert(path);
    });
  }

  isSubfolder(path: string): boolean {
    let folders: string[] = path.slice(1).split("/");
    folders.pop();

    let current: Folder = this;
    for (let folder of folders) {
      current = current.children.get(folder) || new Folder();

      if (current.isFinal) {
        return true;
      }
    }

    return false;
  }
}

function removeSubfolders(folder: string[]): string[] {
  let folders: Folder = new Folder();
  folders.insertFolders(folder);

  folder = folder.filter((path) => {
    return !folders.isSubfolder(path);
  });

  return folder;
}

// Example 1
console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));

// Example 2
console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"]));

// Example 3
console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]));
