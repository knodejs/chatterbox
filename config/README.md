SET PATH<br />

[<br />
  {chatterbox, [<br />
    {port, 8081},<br />
    {ssl, true},<br />
    {ssl_options, [{certfile,   "./config/localhost.crt"},<br />
                   {keyfile,    "./config/localhost.key"},<br />
                   {honor_cipher_order, false},<br />
                   {versions, ['tlsv1.2']},<br />
                   {alpn_preferred_protocols, [<<"h2">>]}]},<br />
    {chatterbox_static_content_handler, [<br />
                   {root_dir, "./priv"}<br />
    ]}<br />
  ]},<br />
  {lager, [<br />
    {handlers, [<br />
      {lager_console_backend, debug}<br />
    ]}<br />
  ]}<br />
].<br />
