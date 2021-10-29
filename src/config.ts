import * as fs from 'fs';
import * as arg from 'arg';
import * as YAML from 'yaml';

const args = arg({
    '--keyconfig': String,
    '--config': String,
});

const keycfgFile = args['--keyconfig'] ? args['--keyconfig'] : '/etc/mareel/connectord.yaml';
const cfgFile = args['--config'] ? args['--config'] : '/etc/mareel/radius.yaml';

const cfg = YAML.parse(fs.readFileSync(cfgFile).toString('utf-8'));
const keycfg = YAML.parse(fs.readFileSync(keycfgFile).toString('utf-8'));

export let config = {
    port: cfg.radius.port,
    secret: cfg.radius.secret,
    certificate: {
        cert: fs.readFileSync(cfg.radius.cert),
        key: fs.readFileSync(cfg.radius.key),
    },
    authentication: 'MareelAuth',
    authenticationOptions: {
        url: keycfg.remote.url,
        token: keycfg.remote.url,
    },
}
