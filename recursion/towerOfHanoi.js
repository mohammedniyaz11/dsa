function towerOfHanoi(n, source, auxiliary, destination) {
    // Base case
    if (n === 1) {
        console.log(`Move disk 1 from ${source} -> ${destination}`);
        return;
    }

    // Step 1: Move n-1 disks from source to auxiliary
    towerOfHanoi(n - 1, source, destination, auxiliary);

    // Step 2: Move nth disk to destination]
    console.log(`Move disk ${n} from ${source} -> ${destination}`);

    // Step 3: Move n-1 disks from auxiliary to destination
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example
const n = 3;
towerOfHanoi(n, "A", "B", "C");


function towerOfHanoiAnotherSol(n, source, auxiliary, destination) {
    // Base case
    if (n === 0) {
        return;
    }

    // Step 1: Move n-1 disks from source to auxiliary
    towerOfHanoiAnotherSol(n - 1, source, destination, auxiliary);

    // Step 2: Move nth disk to destination]
    console.log(`Move disk ${n} from ${source} -> ${auxiliary}`);

    // Step 3: Move n-1 disks from auxiliary to destination
    towerOfHanoiAnotherSol(n - 1, destination, auxiliary, source);
}

// Example
const x= 3;
towerOfHanoi(x, "A", "B", "C");

