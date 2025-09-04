# StockSystemForRoblox
## Instructions (Backend)
`1.)` Create an API Key on the [Roblox Creator Dashboard](https://create.roblox.com/dashboard/credentials?activeTab=ApiKeysTab) for a universe with all DataStore permissions.

<img width="1223" height="477" alt="image" src="https://github.com/user-attachments/assets/7532e98e-f897-4aa1-b52e-d7bd9a0db3c5" />

`2.)` Put API Key in the `api` field in the `settings.json` file.

`3.)` Set `universe` in the `settings.json` file to your universe id.

`4.)` Create a stock in `template.json` (there is a short explanation on how it works, you can look through my basic JS code though)

`5.)` `node index.js` OR `pm2 start index.js` (suggested, it wont stop if you close terminal with pm2)
## Instructions (Roblox Game)
There are many different ways to implement this as it just uses DataStores. It sets a key in the DataStore titled `globalStuff`. This key is called `stock`.
<br>
I would recommend making stocks client-side (unless you want the entire controlling the same stock) and having a decent server-side anti-cheat system for it.
