https://btholt.github.io/complete-intro-to-react-v5/

- What is a component in React? a function that returns a result of React.createElement. Something that returns markup
- What is App? It is like a rubber stamp that you can reuse to stamp things as many times as you want
- What is createElement? so it creates an element with whatever the first parameter is, i.e. h1, and then populates it with whatever the third parameter is
- What does ReactDOM.render do? It essentially renders whatever element is passed into the React.createElement in the first parameter of .render
- What are the 3 parameters React.createElement gets? what kind of tag it is, attributes you want to give the component, and whatever children you want to be passed to an element
- What is so great about components? They are reusable
- How do you edit multiple lines in VScode? hold option and click multiple lines then type
- How do you destructure props? instead of passing in props into the function and using the notion props.propertyone, props.propertytwo, you instead just pass in ({ propertyone, propertytwo, etc.}) and then just use the properties names without prefixing them with props.

Tools
- How to open terminal in VScode? control + shift + #
- How do you avoid npm asking you questions when you initialize it? npm init -y
- Where are the dependencies managed? package.json
- How do you install prettier?  npm install -D prettier
- How do you install eslint? npm install -D eslint eslint-config-prettier
- What does the -D thingie do?
- What is package-lock? when you develop your code to production, the package-lock file is what the client uses to download the exact same version of dependencies specified in the package.json
- What does the npm ci command do? it installs the exact same packages as the package-lock.json file
- What are extends in the eslintrc.json file? extends sets of rules to how the code is formatted
- What does "sourceType": "module" mean in parserOptions in the eslinrc.json file? means we'll use es modules, so export and import 
- What does .gitignore do? it basically tells git to not keep track of certain things inside your repo, e.g. node_modules
- Why use parcel over webpack? it's very hands off and configures everything by itself
- How do you install parcel? npm install -D parcel-bundler
- What does parcel do? It bundles all your code together and gets it ready for production as well as your development environment
- How do you set up parcel after install? in the package.json file, go to scripts, type "dev": "parcel src/index.html"
- what is in /nodemodules/bin? binaries tools that are used when you run node scripts
- What does npm run dev do? it builds your app
- How do you install react and react-dom? npm i react react-dom
- How many components per file? 1 component per file

JSX
- What is JSX? It allows you to just write HTML rather than convert html into React
- How do you install all the commands so that ESLint understands react correctly? npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
- What is babel? Babel is a transplier 
- What are extends in eslint? sets of rules for eslint to follow
- What are plugins in eslint? new abilities for eslint
- What are rules in eslint? the area where you can turn on and off specific rules 

UP TO HOOKS