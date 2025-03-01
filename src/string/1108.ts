function defangIPaddr(address: string): string {
  // One-liner
  return address.replaceAll(".", "[.]");

  // Longer version using a regular for loop
  //   let parts: string[] = address.split(".");
  //   let newAddress: string = parts[0];
  //   for (let i = 1; i < 4; i++) {
  //     newAddress = newAddress.concat("[.]" + parts[i]);
  //   }

  //   return newAddress;
}

// Example 1
console.log(defangIPaddr("1.1.1.1"));

// Example 2
console.log(defangIPaddr("255.100.50.0"));
