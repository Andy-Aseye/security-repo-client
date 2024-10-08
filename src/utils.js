export const dataArr = [
  {
    cve: {
      id: "CVE-2013-3900",
      sourceIdentifier: "secure@microsoft.com",
      published: "2013-12-11T00:55:03.693",
      lastModified: "2022-11-02T15:15:43.850",
      vulnStatus: "Analyzed",
      cveTags: [],
      cisaExploitAdd: "2022-01-10",
      cisaActionDue: "2022-07-10",
      cisaRequiredAction: "Apply updates per vendor instructions.",
      cisaVulnerabilityName:
        "Microsoft WinVerifyTrust function Remote Code Execution",
      descriptions: [
        {
          lang: "en",
          value:
            'The WinVerifyTrust function in Microsoft Windows XP SP2 and SP3, Windows Server 2003 SP2, Windows Vista SP2, Windows Server 2008 SP2 and R2 SP1, Windows 7 SP1, Windows 8, Windows 8.1, Windows Server 2012 Gold and R2, and Windows RT Gold and 8.1 does not properly validate PE file digests during Authenticode signature verification, which allows remote attackers to execute arbitrary code via a crafted PE file, aka "WinVerifyTrust Signature Validation Vulnerability."',
        },
        {
          lang: "es",
          value:
            'La función WinVerifyTrust en Microsoft Windows XP SP2 y SP3, Windows Server 2003 SP2, Windows Vista SP2, Windows Server 2008 SP2 y R2 SP1, Windows 7 SP1, Windows 8, Windows 8.1, Windows Server 2012 Gold y R2 y Windows RT Gold y 8.1 no valida correctamente los digest de archivos PE durante la verificación de la firma Authenticode, que permite a atacantes remotos ejecutar código arbitrario mediante un archivo PE manipulado, también conocido como "WinVerifyTrust firma vulnerabilidad de validación."',
        },
      ],
      metrics: {
        cvssMetricV2: [
          {
            source: "nvd@nist.gov",
            type: "Primary",
            cvssData: {
              version: "2.0",
              vectorString: "AV:N/AC:H/Au:N/C:C/I:C/A:C",
              accessVector: "NETWORK",
              accessComplexity: "HIGH",
              authentication: "NONE",
              confidentialityImpact: "COMPLETE",
              integrityImpact: "COMPLETE",
              availabilityImpact: "COMPLETE",
              baseScore: 7.6,
            },
            baseSeverity: "HIGH",
            exploitabilityScore: 4.9,
            impactScore: 10,
            acInsufInfo: false,
            obtainAllPrivilege: false,
            obtainUserPrivilege: false,
            obtainOtherPrivilege: false,
            userInteractionRequired: true,
          },
        ],
      },
      weaknesses: [
        {
          source: "nvd@nist.gov",
          type: "Primary",
          description: [
            {
              lang: "en",
              value: "CWE-20",
            },
          ],
        },
      ],
      configurations: [
        {
          nodes: [
            {
              operator: "OR",
              negate: false,
              cpeMatch: [
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "21540673-614A-4D40-8BD7-3F07723803B0",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:20h2:*:*:*:*:*:*:*",
                  matchCriteriaId: "9E2C378B-1507-4C81-82F6-9F599616845A",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:21h1:*:*:*:*:*:*:*",
                  matchCriteriaId: "FAE4278F-71A7-43E9-8F79-1CBFAE71D730",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:21h2:*:*:*:*:*:*:*",
                  matchCriteriaId: "71E65CB9-6DC2-4A90-8C6A-103BEDC99823",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:1607:*:*:*:*:*:*:*",
                  matchCriteriaId: "E01A4CCA-4C43-46E0-90E6-3E4DBFBACD64",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:1809:*:*:*:*:*:*:*",
                  matchCriteriaId: "6B8F3DD2-A145-4AF1-8545-CC42892DA3D1",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:1909:*:*:*:*:*:*:*",
                  matchCriteriaId: "E9273B95-20ED-4547-B0A8-95AD15B30372",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_11:-:*:*:*:*:*:arm64:*",
                  matchCriteriaId: "B9F64296-66BF-4F1D-A11C-0C44C347E2AC",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_11:-:*:*:*:*:*:x64:*",
                  matchCriteriaId: "5D7F7DDB-440E-42CD-82F4-B2C13F3CC462",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_7:-:sp1:*:*:*:*:*:*",
                  matchCriteriaId: "C2B1C231-DE19-4B8F-A4AA-5B3A65276E46",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_8.1:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "E93068DB-549B-45AB-8E5C-00EB5D8B5CF8",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_rt_8.1:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "C6CE5198-C498-4672-AF4C-77AB4BE06C5C",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2003:-:sp2:*:*:*:*:itanium:*",
                  matchCriteriaId: "9F98AE07-3995-4501-9804-FEA5A87ADFAD",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2003:-:sp2:*:*:*:*:x64:*",
                  matchCriteriaId: "A7371547-290D-4D0D-B98D-CA28B4D2E8B0",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2008:-:sp2:*:*:*:*:*:*",
                  matchCriteriaId: "5F422A8C-2C4E-42C8-B420-E0728037E15C",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2008:r2:sp1:*:*:*:*:x64:*",
                  matchCriteriaId: "AF07A81D-12E5-4B1D-BFF9-C8D08C32FF4F",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2012:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "A7DF96F8-BA6A-4780-9CA3-F719B3F81074",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2012:r2:*:*:*:*:*:*:*",
                  matchCriteriaId: "DB18C4CE-5917-401E-ACF7-2747084FD36E",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2016:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "041FF8BA-0B12-4A1F-B4BF-9C4F33B7C1E7",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2019:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "DB79EE26-FC32-417D-A49C-A1A63165A968",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2022:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "821614DD-37DD-44E2-A8A4-FE8D23A33C3C",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_vista:-:sp2:*:*:-:*:x64:*",
                  matchCriteriaId: "08627673-D381-4481-BD04-F56599C43105",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_xp:-:sp2:*:*:professional:*:x64:*",
                  matchCriteriaId: "C6109348-BC79-4ED3-8D41-EA546A540C79",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_xp:-:sp3:*:*:*:*:*:*",
                  matchCriteriaId: "C9392D35-7BF5-48E9-879B-BBDE9A9E9AB9",
                },
              ],
            },
          ],
        },
      ],
      references: [
        {
          url: "http://blogs.technet.com/b/srd/archive/2013/12/10/ms13-098-update-to-enhance-the-security-of-authenticode.aspx",
          source: "secure@microsoft.com",
          tags: ["Vendor Advisory"],
        },
        {
          url: "https://docs.microsoft.com/en-us/security-updates/securitybulletins/2013/ms13-098",
          source: "secure@microsoft.com",
          tags: ["Patch", "Vendor Advisory"],
        },
        {
          url: "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2013-3900",
          source: "secure@microsoft.com",
          tags: ["Patch", "Vendor Advisory"],
        },
      ],
    },
  },
  {
    cve: {
      id: "CVE-2015-6184",
      sourceIdentifier: "secure@microsoft.com",
      published: "2016-03-09T23:59:00.163",
      lastModified: "2018-10-12T22:10:41.470",
      vulnStatus: "Modified",
      cveTags: [],
      descriptions: [
        {
          lang: "en",
          value:
            'The CAttrArray object implementation in Microsoft Internet Explorer 7 through 11 allows remote attackers to execute arbitrary code or cause a denial of service (type confusion and memory corruption) via a malformed Cascading Style Sheets (CSS) token sequence in conjunction with modifications to HTML elements, aka "Internet Explorer Memory Corruption Vulnerability," a different vulnerability than CVE-2015-6048 and CVE-2015-6049.',
        },
        {
          lang: "es",
          value:
            'La implementación de objeto CAttrArray en Microsoft Internet Explorer 7 hasta la versión 11 permite a atacantes remotos ejecutar código arbitrario o provocar una denegación de servicio (confusión de tipo y corrupción de memoria) a través de una secuencia de tokens Cascading Style Sheets (CSS) mal formada en conjunción con modificaciones a elementos HTML, también conocida como "Internet Explorer Memory Corruption Vulnerability", una vulnerabilidad diferente a CVE-2015-6048 y CVE-2015-6049.',
        },
      ],
      metrics: {
        cvssMetricV30: [
          {
            source: "nvd@nist.gov",
            type: "Primary",
            cvssData: {
              version: "3.0",
              vectorString: "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
              attackVector: "NETWORK",
              attackComplexity: "HIGH",
              privilegesRequired: "NONE",
              userInteraction: "NONE",
              scope: "UNCHANGED",
              confidentialityImpact: "HIGH",
              integrityImpact: "HIGH",
              availabilityImpact: "HIGH",
              baseScore: 8.1,
              baseSeverity: "HIGH",
            },
            exploitabilityScore: 2.2,
            impactScore: 5.9,
          },
        ],
        cvssMetricV2: [
          {
            source: "nvd@nist.gov",
            type: "Primary",
            cvssData: {
              version: "2.0",
              vectorString: "AV:N/AC:M/Au:N/C:C/I:C/A:C",
              accessVector: "NETWORK",
              accessComplexity: "MEDIUM",
              authentication: "NONE",
              confidentialityImpact: "COMPLETE",
              integrityImpact: "COMPLETE",
              availabilityImpact: "COMPLETE",
              baseScore: 9.3,
            },
            baseSeverity: "HIGH",
            exploitabilityScore: 8.6,
            impactScore: 10,
            acInsufInfo: false,
            obtainAllPrivilege: false,
            obtainUserPrivilege: false,
            obtainOtherPrivilege: false,
          },
        ],
      },
      weaknesses: [
        {
          source: "nvd@nist.gov",
          type: "Primary",
          description: [
            {
              lang: "en",
              value: "NVD-CWE-Other",
            },
          ],
        },
      ],
      configurations: [
        {
          nodes: [
            {
              operator: "OR",
              negate: false,
              cpeMatch: [
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:a:microsoft:internet_explorer:7:*:*:*:*:*:*:*",
                  matchCriteriaId: "1A33FA7F-BB2A-4C66-B608-72997A2BD1DB",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:a:microsoft:internet_explorer:8:*:*:*:*:*:*:*",
                  matchCriteriaId: "A52E757F-9B41-43B4-9D67-3FEDACA71283",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:a:microsoft:internet_explorer:9:*:*:*:*:*:*:*",
                  matchCriteriaId: "C043EDDD-41BF-4718-BDCF-158BBBDB6360",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:a:microsoft:internet_explorer:10:*:*:*:*:*:*:*",
                  matchCriteriaId: "D5808661-A082-4CBE-808C-B253972487B4",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:a:microsoft:internet_explorer:11:*:*:*:*:*:*:*",
                  matchCriteriaId: "15BAAA8C-7AF1-46CE-9FFB-3A498508A1BF",
                },
              ],
            },
          ],
        },
        {
          operator: "AND",
          nodes: [
            {
              operator: "OR",
              negate: false,
              cpeMatch: [
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:a:microsoft:internet_explorer:11:*:*:*:*:*:*:*",
                  matchCriteriaId: "15BAAA8C-7AF1-46CE-9FFB-3A498508A1BF",
                },
              ],
            },
            {
              operator: "OR",
              negate: false,
              cpeMatch: [
                {
                  vulnerable: false,
                  criteria: "cpe:2.3:o:microsoft:windows_10:*:*:*:*:*:*:*:*",
                  matchCriteriaId: "FBC814B4-7DEC-4EFC-ABFF-08FFD9FD16AA",
                },
              ],
            },
          ],
        },
      ],
      references: [
        {
          url: "https://docs.microsoft.com/en-us/security-updates/securitybulletins/2015/ms15-106",
          source: "secure@microsoft.com",
        },
        {
          url: "https://www.verisign.com/en_US/security-services/security-intelligence/vulnerability-reports/articles/index.xhtml?id=1218",
          source: "secure@microsoft.com",
        },
      ],
    },
  },
  {
    cve: {
      id: "CVE-2016-0088",
      sourceIdentifier: "secure@microsoft.com",
      published: "2016-04-12T23:59:00.147",
      lastModified: "2018-10-12T22:11:00.707",
      vulnStatus: "Modified",
      cveTags: [],
      descriptions: [
        {
          lang: "en",
          value:
            'Hyper-V in Microsoft Windows 8.1, Windows Server 2012 Gold and R2, and Windows 10 allows guest OS users to execute arbitrary code on the host OS via a crafted application, aka "Hyper-V Remote Code Execution Vulnerability."',
        },
        {
          lang: "es",
          value:
            'Hyper-V en Microsoft Windows 8.1, Windows Server 2012 Gold y R2 y Windows 10 permite a usuarios del SO invitado ejecutar código arbitrario en el SO anfitrión a través de una aplicación manipulada, también conocida como "Hyper-V Remote Code Execution Vulnerability".',
        },
      ],
      metrics: {
        cvssMetricV30: [
          {
            source: "nvd@nist.gov",
            type: "Primary",
            cvssData: {
              version: "3.0",
              vectorString: "CVSS:3.0/AV:L/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H",
              attackVector: "LOCAL",
              attackComplexity: "LOW",
              privilegesRequired: "NONE",
              userInteraction: "NONE",
              scope: "CHANGED",
              confidentialityImpact: "HIGH",
              integrityImpact: "HIGH",
              availabilityImpact: "HIGH",
              baseScore: 9.3,
              baseSeverity: "CRITICAL",
            },
            exploitabilityScore: 2.5,
            impactScore: 6,
          },
        ],
        cvssMetricV2: [
          {
            source: "nvd@nist.gov",
            type: "Primary",
            cvssData: {
              version: "2.0",
              vectorString: "AV:L/AC:L/Au:N/C:C/I:C/A:C",
              accessVector: "LOCAL",
              accessComplexity: "LOW",
              authentication: "NONE",
              confidentialityImpact: "COMPLETE",
              integrityImpact: "COMPLETE",
              availabilityImpact: "COMPLETE",
              baseScore: 7.2,
            },
            baseSeverity: "HIGH",
            exploitabilityScore: 3.9,
            impactScore: 10,
            acInsufInfo: false,
            obtainAllPrivilege: false,
            obtainUserPrivilege: false,
            obtainOtherPrivilege: false,
          },
        ],
      },
      weaknesses: [
        {
          source: "nvd@nist.gov",
          type: "Primary",
          description: [
            {
              lang: "en",
              value: "CWE-284",
            },
          ],
        },
      ],
      configurations: [
        {
          nodes: [
            {
              operator: "OR",
              negate: false,
              cpeMatch: [
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_10:*:*:*:*:*:*:*:*",
                  matchCriteriaId: "FBC814B4-7DEC-4EFC-ABFF-08FFD9FD16AA",
                },
                {
                  vulnerable: true,
                  criteria: "cpe:2.3:o:microsoft:windows_8.1:*:*:*:*:*:*:*:*",
                  matchCriteriaId: "A7F51B5F-AA19-4D31-89FA-6DFAC4BA8F0F",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2012:-:*:*:*:*:*:*:*",
                  matchCriteriaId: "A7DF96F8-BA6A-4780-9CA3-F719B3F81074",
                },
                {
                  vulnerable: true,
                  criteria:
                    "cpe:2.3:o:microsoft:windows_server_2012:r2:*:*:*:*:*:*:*",
                  matchCriteriaId: "DB18C4CE-5917-401E-ACF7-2747084FD36E",
                },
              ],
            },
          ],
        },
      ],
      references: [
        {
          url: "http://www.securitytracker.com/id/1035538",
          source: "secure@microsoft.com",
        },
        {
          url: "https://docs.microsoft.com/en-us/security-updates/securitybulletins/2016/ms16-045",
          source: "secure@microsoft.com",
        },
      ],
    },
  },
];