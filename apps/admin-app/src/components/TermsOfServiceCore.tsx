import * as React from "react";
import classNames from "classnames";

interface TermsOfServiceCoreProps {
  className?: string;
}

export const TermsOfServiceCore = ({ className }: TermsOfServiceCoreProps) => {
  const containerClassName = classNames(
    className,
    "TermsOfServiceCore",
    "content"
  );
  return (
    <div className={containerClassName}>
      <p>
        <strong>Eligibility</strong>
      </p>
      <p>
        To access or use the Interface, you must be able to form a legally
        binding contract with us. Accordingly, you represent that you are at
        least the age of majority in your jurisdiction (e.g., 18 years old in
        the United States) and have the full right, power, and authority to
        enter into and comply with the terms and conditions of this Agreement on
        behalf of yourself and any company or legal entity for which you may
        access or use the Interface.{" "}
      </p>
      <p>
        You further represent that you are not (a) the subject of economic or
        trade sanctions administered or enforced by any governmental authority
        or otherwise designated on any list of prohibited or restricted parties
        (including but not limited to the list maintained by the Office of
        Foreign Assets Control of the U.S. Department of the Treasury) or (b) a
        citizen, resident, or organized in a jurisdiction or territory that is
        the subject of comprehensive country-wide, territory-wide, or regional
        economic sanctions by the United States. Finally, you represent that
        your access and use of the Interface will fully comply with all
        applicable laws and regulations, and that you will not access or use the
        Interface to conduct, promote, or otherwise facilitate any illegal
        activity.
      </p>
      <p>
        <strong>Description of Services provided through the Interface</strong>
        The Interface is a web-based means of accessing the Protocol. The
        Interface is distinct from the Protocol. The Protocol itself has three
        versions, designated as v1, v2, and v3, each of which comprises
        open-source or source-available self-executing smart contracts that are
        deployed on various public blockchains, such as Ethereum. Chance Cards
        (Kames Cox Geraghty) does not control or operate any version of the
        Protocol on any blockchain network. By using the Interface, you
        understand that you are not buying or selling digital assets from us and
        that we do not operate any liquidity pools on the Protocol or control
        trade execution on the Protocol. When traders pay fees for trades, those
        fees accrue to liquidity providers for the Protocol. As a general
        matter, Labs is not a liquidity provider into Protocol liquidity pools
        and liquidity providers are independent third parties.
      </p>
      <p>
        <strong>Prohibited Activity</strong>
      </p>
      <p>
        {" "}
        You agree not to engage in, or attempt to engage in, any of the
        following categories of prohibited activity in relation to your access
        and use of the Interface:
      </p>
      <ul className="list-disc pl-8">
        <li className="my-2 leading-6">
          <em>Intellectual Property Infringement</em>. Activity that infringes
          on or violates any copyright, trademark, service mark, patent, right
          of publicity, right of privacy, or other proprietary or intellectual
          property rights under the law.
        </li>
        <li className="my-2 leading-6">
          {" "}
          *Cyberattack*. Activity that seeks to interfere with or compromise the
          integrity, security, or proper functioning of any computer, server,
          network, personal device, or other information technology system,
          including (but not limited to) the deployment of viruses and denial of
          service attacks.
        </li>
        <li className="my-2 leading-6">
          {" "}
          *Fraud and Misrepresentation*. Activity that seeks to defraud us or
          any other person or entity, including (but not limited to) providing
          any false, inaccurate, or misleading information in order to
          unlawfully obtain the property of another.
        </li>
        <li className="my-2 leading-6">
          {" "}
          *Market Manipulation*. Activity that violates any applicable law,
          rule, or regulation concerning the integrity of trading markets,
          including (but not limited to) the manipulative tactics commonly known
          as “rug pulls”, pumping and dumping, and wash trading.
        </li>
        <li className="my-2 leading-6">
          {" "}
          *Securities and Derivatives Violations*. Activity that violates any
          applicable law, rule, or regulation concerning the trading of
          securities or derivatives, including (but not limited to) the
          unregistered offering of securities and the offering of leveraged and
          margined commodity products to retail customers in the United States.
        </li>
        <li className="my-2 leading-6">
          {" "}
          *Any Other Unlawful Conduct*. Activity that violates any applicable
          law, rule, or regulation of the United States or another relevant
          jurisdiction, including (but not limited to) the restrictions and
          regulatory requirements imposed by U.S. law.
        </li>
      </ul>
      <p>
        <strong>Non-Solicitation; No Investment Advice</strong>
      </p>
      <p>
        You agree and understand that: (a) all trades you submit through the
        Interface are considered unsolicited, which means that they are solely
        initiated by you; (b) you have not received any investment advice from
        us in connection with any trades, including those you place via the
        PoolTogether, Inc. services; and (c) we do not conduct a suitability
        review of any trades you submit.
      </p>
      <h3 className="font-normal text-lg">
        Non-Custodial and No Fiduciary Duties{" "}
      </h3>
      <p className="">
        The Interface is a purely non-custodial application, meaning you are
        solely responsible for the custody of the cryptographic private keys to
        the digital asset wallets you hold. This Agreement is not intended to,
        and does not, create or impose any fiduciary duties on us. To the
        fullest extent permitted by law, you acknowledge and agree that we owe
        no fiduciary duties or liabilities to you or any other party, and that
        to the extent any such duties or liabilities may exist at law or in
        equity, those duties and liabilities are hereby irrevocably disclaimed,
        waived, and eliminated. You further agree that the only duties and
        obligations that we owe you are those set out expressly in this
        Agreement.
      </p>
      <p>
        <strong>Compliance and Tax Obligations</strong>
      </p>
      <p>
        The Interface may not be available or appropriate for use in your
        jurisdiction. By accessing or using the Interface, you agree that you
        are solely and entirely responsible for compliance with all laws and
        regulations that may apply to you. Specifically, your use of the
        Interface or the Protocol may result in various tax consequences, such
        as income or capital gains tax, value-added tax, goods and services tax,
        or sales tax in certain jurisdictions. It is your responsibility to
        determine whether taxes apply to any transactions you initiate or
        receive and, if so, to report and/or remit the correct tax to the
        appropriate tax authority.
      </p>
      <p>
        <strong>Assumption of Risk</strong>
      </p>
      <p>
        By accessing and using the Interface, you represent that you are
        financially and technically sophisticated enough to understand the
        inherent risks associated with using cryptographic and blockchain-based
        systems, and that you have a working knowledge of the usage and
        intricacies of digital assets such as ether (ETH), so-called
        stablecoins, and other digital tokens such as those following the
        Ethereum Token Standard (ERC-20).{" "}
      </p>
      <p className="">
        In particular, you understand that the markets for these digital assets
        are nascent and highly volatile due to risk factors including (but not
        limited to) adoption, speculation, technology, security, and regulation.
        You understand that anyone can create a token, including fake versions
        of existing tokens and tokens that falsely claim to represent projects,
        and acknowledge and accept the risk that you may mistakenly trade those
        or other tokens. So-called stablecoins may not be as stable as they
        purport to be, may not be fully or adequately collateralized, and may be
        subject to panics and runs.
      </p>
      <p>
        Further, you understand that smart contract transactions automatically
        execute and settle, and that blockchain-based transactions are
        irreversible when confirmed. You acknowledge and accept that the cost
        and speed of transacting with cryptographic and blockchain-based systems
        such as Ethereum are variable and may increase dramatically at any time.
        You further acknowledge and accept the risk of selecting to trade in
        Expert Modes, which can expose you to potentially significant price
        slippage and higher costs.
      </p>
      <p>
        In summary, you acknowledge that we are not responsible for any of these
        variables or risks, do not own or control the Protocol, and cannot be
        held liable for any resulting losses that you experience while accessing
        or using the Interface. Accordingly, you understand and agree to assume
        full responsibility for all of the risks of accessing and using the
        Interface to interact with the Protocol.
      </p>
      <p>
        <strong>Third-Party Resources and Promotions</strong>
      </p>
      <p>
        The Interface may contain references or links to third-party resources,
        including (but not limited to) information, materials, products, or
        services, that we do not own or control. In addition, third parties may
        offer promotions related to your access and use of the Interface. We do
        not endorse or assume any responsibility for any such resources or
        promotions. If you access any such resources or participate in any such
        promotions, you do so at your own risk, and you understand that this
        Agreement does not apply to your dealings or relationships with any
        third parties. You expressly relieve us of any and all liability arising
        from your use of any such resources or participation in any such
        promotions.
      </p>
      <p>
        <strong>Release of Claims</strong>
      </p>
      <p>
        You expressly agree that you assume all risks in connection with your
        access and use of the Interface and your interaction with the Protocol.
        You further expressly waive and release us from any and all liability,
        claims, causes of action, or damages arising from or in any way relating
        to your use of the Interface and your interaction with the Protocol. If
        you are a California resident, you waive the benefits and protections of
        California Civil Code § 1542, which provides: [a] general release does
        not extend to claims that the creditor or releasing party does not know
        or suspect to exist in his or her favor at the time of executing the
        release and that, if known by him or her, would have materially affected
        his or her settlement with the debtor or released party."
      </p>
      <p>
        <strong>No Warranties</strong>
      </p>
      <p>
        The Interface is provided on an AS IS and AS AVAILABLE basis. TO THE
        FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ANY REPRESENTATIONS AND
        WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
        INCLUDING (BUT NOT LIMITED TO) THE WARRANTIES OF MERCHANTABILITY AND
        FITNESS FOR A PARTICULAR PURPOSE. You acknowledge and agree that your
        use of the Interface is at your own risk. We do not represent or warrant
        that access to the Interface will be continuous, uninterrupted, timely,
        or secure; that the information contained in the Interface will be
        accurate, reliable, complete, or current; or that the Interface will be
        free from errors, defects, viruses, or other harmful elements. No
        advice, information, or statement that we make should be treated as
        creating any warranty concerning the Interface. We do not endorse,
        guarantee, or assume responsibility for any advertisements, offers, or
        statements made by third parties concerning the Interface.
      </p>
      <p className="">
        Chance Cards uses the PoolTogether protocol, which has entities in the
        state of New York, which is why we expect visitors to the Chance Cards
        website(s) to follow the laws pursuant to the state of New York's
        jurisdiction.
      </p>
      <p>
        Similarly, the Protocol is provided "AS IS", at your own risk, and
        without warranties of any kind. Although we contributed to the initial
        code for the Protocol, we do not provide, own, or control the Protocol,
        which is run autonomously without any headcount by smart contracts
        deployed on various blockchains. Upgrades and modifications to the
        Protocol are generally managed in a community-driven way by holders of
        the UNI governance token. No developer or entity involved in creating
        the Protocol will be liable for any claims or damages whatsoever
        associated with your use, inability to use, or your interaction with
        other users of, the Protocol, including any direct, indirect,
        incidental, special, exemplary, punitive or consequential damages, or
        loss of profits, cryptocurrencies, tokens, or anything else of value. We
        do not endorse, guarantee, or assume responsibility for any
        advertisements, offers, or statements made by third parties concerning
        the Interface.
      </p>
      <p>
        <strong>Limitation of Liability</strong>
      </p>
      <p>
        UNDER NO CIRCUMSTANCES SHALL WE OR ANY OF OUR OFFICERS, DIRECTORS,
        EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES, OR SUBSIDIARIES BE LIABLE TO
        YOU FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        EXEMPLARY DAMAGES, INCLUDING (BUT NOT LIMITED TO) DAMAGES FOR LOSS OF
        PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE PROPERTY, ARISING OUT
        OF OR RELATING TO ANY ACCESS OR USE OF THE INTERFACE, NOR WILL WE BE
        RESPONSIBLE FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM HACKING,
        TAMPERING, OR OTHER UNAUTHORIZED ACCESS OR USE OF THE INTERFACE OR THE
        INFORMATION CONTAINED WITHIN IT. WE ASSUME NO LIABILITY OR
        RESPONSIBILITY FOR ANY: (A) ERRORS, MISTAKES, OR INACCURACIES OF
        CONTENT; (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
        WHATSOEVER, RESULTING FROM ANY ACCESS OR USE OF THE INTERFACE; (C)
        UNAUTHORIZED ACCESS OR USE OF ANY SECURE SERVER OR DATABASE IN OUR
        CONTROL, OR THE USE OF ANY INFORMATION OR DATA STORED THEREIN; (D)
        INTERRUPTION OR CESSATION OF FUNCTION RELATED TO THE INTERFACE; (E)
        BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR
        THROUGH THE INTERFACE; (F) ERRORS OR OMISSIONS IN, OR LOSS OR DAMAGE
        INCURRED AS A RESULT OF THE USE OF, ANY CONTENT MADE AVAILABLE THROUGH
        THE INTERFACE; AND (G) THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF
        ANY THIRD PARTY. UNDER NO CIRCUMSTANCES SHALL WE OR ANY OF OUR OFFICERS,
        DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES, OR SUBSIDIARIES
        BE LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS,
        DAMAGES, LOSSES, OR COSTS IN AN AMOUNT EXCEEDING THE AMOUNT YOU PAID TO
        US IN EXCHANGE FOR ACCESS TO AND USE OF THE INTERFACE, OR USD$100.00,
        WHICHEVER IS GREATER. THIS LIMITATION OF LIABILITY APPLIES REGARDLESS OF
        WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE,
        STRICT LIABILITY, OR ANY OTHER BASIS, AND EVEN IF WE HAVE BEEN ADVISED
        OF THE POSSIBILITY OF SUCH LIABILITY. Some jurisdictions do not allow
        the exclusion of certain warranties or the limitation or exclusion of
        certain liabilities and damages. Accordingly, some of the disclaimers
        and limitations set forth in this Agreement may not apply to you. This
        limitation of liability shall apply to the fullest extent permitted by
        law.
      </p>
      <p>
        <strong>Governing Law</strong>
      </p>
      <p>
        You agree that the laws of the State of New York, without regard to
        principles of conflict of laws, govern this Agreement and any Dispute
        between you and us. You further agree that the Interface shall be deemed
        to be based solely in the State of New York, and that although the
        Interface may be available in other jurisdictions, its availability does
        not give rise to general or specific personal jurisdiction in any forum
        outside the State of New York. Any arbitration conducted pursuant to
        this Agreement shall be governed by the Federal Arbitration Act. You
        agree that the federal and state courts of New York County, New York are
        the proper forum for any appeals of an arbitration award or for court
        proceedings in the event that this Agreement's binding arbitration
        clause is found to be unenforceable.
      </p>
      <p>
        <strong>Entire Agreement</strong>
      </p>
      <p>
        These terms constitute the entire agreement between you and us with
        respect to the subject matter hereof. This Agreement supersedes any and
        all prior or contemporaneous written and oral agreements, communications
        and other understandings (if any) relating to the subject matter of the
        terms.
      </p>
    </div>
  );
};

export default TermsOfServiceCore;
